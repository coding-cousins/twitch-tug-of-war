import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./TugOfWarForm.scss";
import { useHistory } from "react-router-dom";
import { useEmitEvent } from "react-socket-io-hooks";

const TugOfWarForm = () => {
  const history = useHistory();
  const [streamerOneInput, setStreamerOneInput] = useState("");
  const [streamerTwoInput, setStreamerTwoInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/battle/${streamerOneInput}/${streamerTwoInput}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="TugOfWarForm">
        <div className="input-container">
          <TextField
            label="Streamer One"
            className="input"
            variant="filled"
            value={streamerOneInput}
            onChange={({ target }) => setStreamerOneInput(target.value)}
            required
          ></TextField>

          <TextField
            required
            label="Streamer Two"
            className="input"
            variant="filled"
            value={streamerTwoInput}
            onChange={({ target }) => setStreamerTwoInput(target.value)}
          ></TextField>
        </div>
        <button type="submit">Battle!</button>
      </form>
    </>
  );
};

export default TugOfWarForm;
