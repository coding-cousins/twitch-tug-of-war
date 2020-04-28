import React from "react";
import "./StreamChats.scss";
import { useSocketState } from "react-socket-io-hooks";

const StreamChats = () => {
  const { streamerOne, streamerTwo } = useSocketState();

  const streamerOneChatItems = streamerOne.messages.map((item, i) => {
    return (
      <li key={i} className="chat-item">
        <p className="chat-user">{item.user}</p>
        <p className="chat-message">{item.message}</p>
      </li>
    );
  });

  const streamerTwoChatItems = streamerTwo.messages.map((item, i) => {
    return (
      <li key={i} className="chat-item">
        <p className="chat-user">{item.user}</p>
        <p className="chat-message">{item.message}</p>
      </li>
    );
  });

  return (
    <div className="StreamChats">
      <ul className="streamer-one-chat">{streamerOneChatItems}</ul>
      <ul className="streamer-two-chat">{streamerTwoChatItems}</ul>
    </div>
  );
};

export default StreamChats;
