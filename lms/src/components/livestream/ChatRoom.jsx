import React, { useState, useEffect, useRef } from 'react';
import AgoraRTM from 'agora-rtm-sdk';

const APP_ID = '2450467a64c845fd97d9e60e6e06804a';

const ChatRoom = () => {
  const [rtmClient, setRtmClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [displayName, setDisplayName] = useState(sessionStorage.getItem('display_name') || 'Guest');
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const messageFormRef = useRef(null);
  const messagesWrapperRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const rtm =  AgoraRTM.createInstance(APP_ID);
      await rtm.login({ uid: 'someUniqueId' }); // Replace 'someUniqueId' with actual UID
      const channel =  rtm.createChannel('roomId'); // Replace 'roomId' with actual room ID
      await channel.join();

      channel.on('MemberJoined', handleMemberJoined);
      channel.on('MemberLeft', handleMemberLeft);
      channel.on('ChannelMessage', handleChannelMessage);

      setRtmClient(rtm);
      setChannel(channel);
    };

    init();

    return () => {
      leaveChannel();
    };
  }, []);

  const handleMemberJoined = async (MemberId) => {
    console.log('A new member has joined the room:', MemberId);
    await addMemberToDom(MemberId);
    
    const members = await channel.getMembers();
    setMembers(members);

    const { name } = await rtmClient.getUserAttributesByKeys(MemberId, ['name']);
    addBotMessageToDom(`Welcome to the room ${name}! 👋`);
  };

  const addMemberToDom = async (MemberId) => {
    const { name } = await rtmClient.getUserAttributesByKeys(MemberId, ['name']);
    setMembers((prev) => [
      ...prev,
      { id: MemberId, name }
    ]);
  };

  const handleMemberLeft = async (MemberId) => {
    setMembers((prev) => prev.filter(member => member.id !== MemberId));
  };

  const handleChannelMessage = async (messageData) => {
    console.log('A new message was received');
    const data = JSON.parse(messageData.text);

    if (data.type === 'chat') {
      addMessageToDom(data.displayName, data.message);
    }

    if (data.type === 'user_left') {
      // Handle user left
      // For simplicity, we'll assume displayFrame and videoFrames are handled elsewhere
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(messageFormRef.current);
    const message = formData.get('message');

    await channel.sendMessage({
      text: JSON.stringify({ type: 'chat', message, displayName })
    });

    addMessageToDom(displayName, message);
    e.target.reset();
  };

  const addMessageToDom = (name, message) => {
    setMessages((prev) => [
      ...prev,
      { name, message }
    ]);

    // Scroll to bottom of messages
    setTimeout(() => {
      if (messagesWrapperRef.current) {
        messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
      }
    }, 0);
  };

  const addBotMessageToDom = (botMessage) => {
    setMessages((prev) => [
      ...prev,
      { name: '🤖 Mumble Bot', message: botMessage, isBot: true }
    ]);

    // Scroll to bottom of messages
    setTimeout(() => {
      if (messagesWrapperRef.current) {
        messagesWrapperRef.current.scrollTop = messagesWrapperRef.current.scrollHeight;
      }
    }, 0);
  };

  const leaveChannel = async () => {
    if (channel) {
      await channel.leave();
    }
    if (rtmClient) {
      await rtmClient.logout();
    }
  };

  return (
    <div>
      <div id="member__list">
        {members.map(member => (
          <div key={member.id} className="member__wrapper">
            <span className="green__icon"></span>
            <p className="member_name">{member.name}</p>
          </div>
        ))}
      </div>
      <div id="messages" ref={messagesWrapperRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message__wrapper ${msg.isBot ? 'message__body__bot' : 'message__body'}`}>
            <strong className={`message__author ${msg.isBot ? 'message__author__bot' : ''}`}>{msg.name}</strong>
            <p className="message__text">{msg.message}</p>
          </div>
        ))}
      </div>
      <form ref={messageFormRef} onSubmit={sendMessage} id="message__form">
        <input type="text" name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
