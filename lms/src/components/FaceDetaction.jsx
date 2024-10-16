import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

const preloadModels = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
  await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
  await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
};

// Preload models as soon as the app loads
preloadModels();

const FaceDetection = ({ onAccessGranted }) => {
  const videoRef = useRef();
  const intervalIdRef = useRef(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let errorOccurred = false; // Flag to track if an error has occurred

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        if (!errorOccurred) {
          console.error("Webcam error:", err);
          alert(
            "Could not access webcam. Please ensure it is connected and not being used by another application."
          );
          errorOccurred = true; // Prevent further attempts
          cleanup();
          navigate("/user/my-courses");
        }
      }
    };

    const cleanup = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };

    const captureImage = async () => {
      const video = videoRef.current;
      if (!video) return;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      localStorage.setItem("savedFace", dataUrl);
      cleanup();
      onAccessGranted();
    };

    const detectFace = async (image) => {
      return await faceapi
        .detectSingleFace(image)
        .withFaceLandmarks()
        .withFaceDescriptor();
    };

    const compareFaces = async (savedFace, currentFace) => {
      const distance = faceapi.euclideanDistance(
        savedFace.descriptor,
        currentFace.descriptor
      );
      return distance < 0.6;
    };

    const checkAccess = async () => {
      const savedFaceDataUrl = localStorage.getItem("savedFace");
      if (!savedFaceDataUrl) {
        console.log("No saved face found.");
        return;
      }

      const savedImage = new Image();
      savedImage.src = savedFaceDataUrl;
      await savedImage.decode();
      const savedFace = await detectFace(savedImage);

      const video = videoRef.current;
      if (!video) return;
      const currentFace = await detectFace(video);

      if (!currentFace) {
        cleanup();
        navigate("/user/my-courses");
        return;
      }

      if (await compareFaces(savedFace, currentFace)) {
        console.log("Access granted");
        cleanup();
        onAccessGranted();
      } else {
        alert("Access denied");
        navigate("/user/my-courses");
      }
    };

    startVideo();

    if (!errorOccurred) {
      intervalIdRef.current = setInterval(() => {
        const savedFaceDataUrl = localStorage.getItem("savedFace");
        if (!savedFaceDataUrl) {
          captureImage();
        } else {
          checkAccess();
        }
      }, 5000);
    }

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <video ref={videoRef} autoPlay muted width="720" height="560"></video>
    </div>
  );
};

export default FaceDetection;
