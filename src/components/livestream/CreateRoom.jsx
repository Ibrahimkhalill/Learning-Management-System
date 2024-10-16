import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client"; // Import socket.io-client
import axiosInstance from "../axiosInstance";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const socket = io("https://real-time-video-chat-app-backend.onrender.com");

export default function CreateRoom() {
  const [className, setClassName] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for any confirmation or responses from the backend if needed
    socket.on("roomCreated", (roomData) => {
      console.log("Room Created:", roomData);
    });

    // Cleanup the socket connection on unmount
    return () => {
      socket.off("roomCreated");
    };
  }, []);

  const handleSubmit = async () => {
    // Generate a unique room ID and link
    const roomId = uuidv4();
    const roomLink = `/live/stream/${roomId}`;

    // Save data to localStorage
    localStorage.setItem("display_name", name);
    localStorage.setItem("roomLink", roomLink);
    localStorage.setItem("role", "admin");

    try {
      const response = await axios.post(
        "https://real-time-video-chat-app-backend.onrender.com/api/carete/room",
        {
          live_name: className,
          live_link: roomLink,
        }
      );
      console.log(response);
      if (response.status === 200) {
        socket.emit("createRoom", {
          roomId,
          roomLink,
          className,
          name,
          role: "admin",
        });

       navigate(roomLink)
      }
    } catch (e) {
      console.log("Error create room", e);
    }

    // Emit room creation event to the backend with room info and user profile

    // Navigate to the room link
  };

  return (
    <div className="container m-auto flex items-center justify-center h-screen">
      <ToastContainer />
      <div className="border md:w-[30vw] w-full shadow-md">
        <div className="bg-coching-text_color text-white py-3">
          <h1 className="text-2xl text-center">Create Room or Join Room</h1>
        </div>
        <div className="w-full px-2 py-3">
          <input
            type="text"
            placeholder="Write your live class name"
            onChange={(e) => setClassName(e.target.value)}
            className="border w-full py-2 rounded-md px-2 outline-none"
          />
        </div>
        <div className="w-full px-2 py-3">
          <input
            type="text"
            placeholder="Write your name"
            onChange={(e) => setName(e.target.value)}
            className="border w-full py-2 rounded-md px-2 outline-none"
          />
        </div>
        <div className="w-full px-2 py-2">
          <button
            onClick={handleSubmit}
            className="bg-gray-800 w-full py-2 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
