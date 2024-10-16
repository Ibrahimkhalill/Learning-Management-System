import React, { useRef, useState } from 'react';
import SimplePeer from 'simple-peer';

const ScreenShare = () => {
  const [peer, setPeer] = useState(null);
  const videoRef = useRef();

  const startScreenShare = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    videoRef.current.srcObject = stream;

    const newPeer = new SimplePeer({ initiator: true, stream });
    setPeer(newPeer);
  };

  return (
    <div>
      <button onClick={startScreenShare}>Share Screen</button>
      <video ref={videoRef} autoPlay />
    </div>
  );
};

export default ScreenShare;
