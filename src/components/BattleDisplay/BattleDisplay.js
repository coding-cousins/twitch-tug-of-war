import React, { useEffect } from "react";
import TugOfWarDisplay from "../TugOfWarDisplay/TugOfWarDisplay";
import StreamChats from "../StreamChats/StreamChats";
import BonusEmote from "../BonusEmote/BonusEmote";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import WinnerDisplay from "../WinnerDisplay/WinnerDisplay";
import "./BattleDisplay.scss";
import { useEmitEvent, useSocket } from "react-socket-io-hooks";
import { useParams } from "react-router-dom";

const BattleDisplay = () => {
  const startGame = useEmitEvent("START_GAME");
  const { streamerOneUsername, streamerTwoUsername } = useParams();
  const socket = useSocket();

  useEffect(() => {
    if (socket.ids === 0) {
      startGame({
        streamerOneUsername,
        streamerTwoUsername,
      });
    }
  }, [socket]);

  return (
    <div className="BattleDisplay">
      <TugOfWarDisplay />
      <WinnerDisplay />
      <ScoreDisplay />
      <StreamChats />
      <BonusEmote />
    </div>
  );
};

export default BattleDisplay;
