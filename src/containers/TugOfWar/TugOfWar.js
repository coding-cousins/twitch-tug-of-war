import React, { useState } from "react";
import HomePage from "../../components/HomePage/HomePage";
import BattleDisplay from "../../components/BattleDisplay/BattleDisplay";
import Header from "../../components/Header/Header";
import { Switch, Route } from "react-router-dom";
import "./TugOfWar.scss";

const TugOfWar = () => {
  return (
    <div className="TugOfWar">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/battle/:streamerOneUsername/:streamerTwoUsername"
          component={BattleDisplay}
        />
      </Switch>
    </div>
  );
};

export default TugOfWar;
