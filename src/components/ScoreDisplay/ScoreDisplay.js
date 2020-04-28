import React from "react";
import { useSocketState } from "react-socket-io-hooks";
import "./ScoreDisplay.scss";

const ScoreDisplay = () => {
  const { streamerOne, streamerTwo, currentWinner } = useSocketState();

  return (
    <section className="ScoreDisplay">
      <div className="score-display">
        <p>
          {streamerOne.username}: <span>{streamerOne.score}</span>
        </p>
        <p>
          {streamerTwo.username}: <span>{streamerTwo.score}</span>
        </p>
      </div>

      {currentWinner && (
        <div className="current-winner">
          <h2>
            <span>{currentWinner} </span>is winning!
          </h2>
        </div>
      )}
    </section>
  );
};

export default ScoreDisplay;
