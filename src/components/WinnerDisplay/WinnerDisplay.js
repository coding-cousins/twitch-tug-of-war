import React from "react";
import "./WinnerDisplay.scss";
import { useSocketState, useEmitEvent } from "react-socket-io-hooks";
import { useParams, useHistory } from "react-router-dom";

const WinnerDisplay = () => {
  const { winner } = useSocketState();
  const { streamerOneUsername, streamerTwoUsername } = useParams();
  const history = useHistory();
  const startGame = useEmitEvent("START_GAME");
  if (!winner) return <div></div>;

  const handleHomeClick = () => {
    history.push("/");
  };
  const handleRematch = () => {
    console.log("click");
    startGame({ streamerOneUsername, streamerTwoUsername });
  };

  return (
    <div className="WinnerDisplay">
      <div className="endgame-results">
        <h1>
          <span>{winner}</span> won the battle!
        </h1>
      </div>
      <div className="endgame-options">
        <button onClick={handleRematch}>Rematch</button>
        <p>- or -</p>
        <button onClick={handleHomeClick}>Back Home</button>
      </div>
    </div>
  );
};

export default WinnerDisplay;
