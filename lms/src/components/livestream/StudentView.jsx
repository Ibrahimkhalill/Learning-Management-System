import React, { useEffect, useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import AgoraRTM from "agora-rtm-sdk";
import { MdCallEnd, MdOutlineChat } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
const appId = "2450467a64c845fd97d9e60e6e06804a";
const channelName = "test";
const token = null; // Replace with a valid token if needed
const rtmToken = null; // Replace with a valid RTM token if needed

const client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
const rtmClient = AgoraRTM.createInstance(appId);

const StudentView = () => {
  const hangupButton = useRef(null);
  const muteAudButton = useRef(null);
  const chatInput = useRef(null);
  const chatMessages = useRef(null);
  const [participants, setParticipants] = useState([]);
  const [chat, setChat] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const userId = localStorage.getItem("username");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const channel = useRef(null);

  useEffect(() => {
    const initAgora = async () => {
      try {
        // Join RTC channel
        await client.join(appId, channelName, token);
        await client.setClientRole("audience");

        client.on("user-published", handleUserPublished);
        client.on("user-unpublished", handleUserUnpublished);
      } catch (error) {
        console.error("Failed to initialize Agora:", error);
      }
    };

    initAgora();

    return () => {
      client
        .leave()
        .catch((error) => console.error("Error leaving channel:", error));
      rtmClient
        .logout()
        .catch((error) => console.error("Error logging out from RTM:", error));
    };
  }, []);

  useEffect(() => {
    socket.emit("join room", userId);
    socket.on("chat message", ({ userId, message }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { username: userId, message: message },
      ]);
    });

    socket.on("participant joined", (id) => {
      setParticipants(id);
    });

    socket.on("participant left", (id) => {
      setParticipants((prev) => prev.filter((pid) => pid !== id));
    });

    return () => {
      socket.off("chat message");
      socket.off("participant joined");
      socket.off("participant left");
    };
  }, [userId]);

  const handleUserPublished = async (user, mediaType) => {
    try {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        const remoteVideoContainer = document.createElement("div");
        remoteVideoContainer.id = `remote-${user.uid}`;
        remoteVideoContainer.style.width = "320px";
        remoteVideoContainer.style.height = "240px";
        document.getElementById("div").appendChild(remoteVideoContainer);
        remoteVideoTrack.play(remoteVideoContainer);
      }
    } catch (error) {
      console.error("Error handling user publication:", error);
    }
  };

  const handleUserUnpublished = (user) => {
    console.log("User unpublished:", user);
    const videoContainer = document.getElementById(`remote-${user.uid}`);
    if (videoContainer) {
      videoContainer.remove();
    }
  };

  const handleSendMessage = () => {
    socket.emit("chat message", { userId, message });
    setMessage("");
  };
  console.log("participants",participants);
  

  return (
    <main className="w-full flex">
      {/* Participants Sidebar */}
      <div className="h-screen w-[15%] bg-slate-900 text-white">
        <div className="bg-cyan-800 py-4 text-center text-xl">Participants</div>
        <div>
          {participants.map((data, index) => (
            <h1 key={index}>{data}</h1>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-[65%] h-[100vh] bg-slate-600 flex flex-col gap-2">
        <div id="div" className="w-full h-[90%] object-fill"></div>

        {/* Control Buttons */}
        <div className="absolute bottom-5 left-[40%] flex flex-row gap-2">
          <button
            ref={muteAudButton}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            <IoPeople size={20} />
          </button>

          <button
            title="Chat Now"
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            <MdOutlineChat size={20} />
          </button>

          <button
            title="Leave Call"
            ref={hangupButton}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            <MdCallEnd size={20} />
          </button>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-[20%] relative bg-gray-800 px-3">
        <h1 className="text-white py-3">Welcome to the room Ibrahim! 👋</h1>
        <div ref={chatMessages} className="flex flex-col gap-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="p-2 flex items-start flex-col bg-gray-700 text-white rounded-md"
            >
              <p className="font-medium">{msg.username}</p>
              <p>{msg.message}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="absolute bottom-2 flex flex-col">
          <div className="flex">
            <input
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              value={message}
              className="flex-1 p-2 border border-gray-700 bg-gray-800 text-white"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentView;
