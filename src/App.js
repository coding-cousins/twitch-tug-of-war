import React from "react";
import "./App.scss";
import "./reset.css";
import { SocketProvider } from "react-socket-io-hooks";
import TugOfWar from "./containers/TugOfWar/TugOfWar";
import reducer from "./reducers/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SocketProvider
        uri={"https://twitch-tug-of-war.herokuapp.com"}
        reducer={reducer}
        initialState={{
          activeGame: false,
          bonusEmote: "",
          winner: null,
          currentWinner: null,
          streamerOne: {
            username: "",
            score: 0,
            messages: [],
          },
          streamerTwo: {
            username: "",
            score: 0,
            messages: [],
          },
        }}
      >
        <Router>
          <TugOfWar />
        </Router>
      </SocketProvider>
    </div>
  );
}

export default App;
