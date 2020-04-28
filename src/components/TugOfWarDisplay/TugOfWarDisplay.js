import React, { useEffect, useState } from "react";
import rope from "../../assets/rope.png";
import "./TugOfWarDisplay.scss";
import { useSocketState } from "react-socket-io-hooks";
import defaultAvatar from "../../assets/default-avatar.png";
import { getTwitchAvatars } from "../../services/twitchApi";
import { useParams } from "react-router-dom";

const TugOfWarDisplay = () => {
  const { streamerOne, streamerTwo } = useSocketState();
  const { streamerOneUsername, streamerTwoUsername } = useParams();
  const [streamerOneAvatar, setStreamerOneAvatar] = useState(null);
  const [streamerTwoAvatar, setStreamerTwoAvatar] = useState(null);

  useEffect(() => {
    getTwitchAvatars(streamerOneUsername, streamerTwoUsername).then(
      (avatars) => {
        setStreamerOneAvatar(avatars[0]);
        setStreamerTwoAvatar(avatars[1]);
      }
    );
  }, []);

  const offset = (streamerOne.score - streamerTwo.score) * -5;

  return (
    <section
      className="TugOfWarDisplay"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <div className="streamer-display one">
        <img
          className="streamer-icon"
          src={streamerOneAvatar || defaultAvatar}
        ></img>
      </div>

      <img src={rope} className="rope" alt="rope" />

      <div className="streamer-display two">
        <img
          className="streamer-icon"
          src={streamerTwoAvatar || defaultAvatar}
        ></img>
      </div>
    </section>
  );
};

export default TugOfWarDisplay;
