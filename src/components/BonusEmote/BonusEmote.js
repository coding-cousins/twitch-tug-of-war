import React, { useState, useEffect } from "react";
import "./BonusEmote.scss";
import Particles from "react-particles-js";
import PogChamp from "../../assets/PogChamp.png";
import Kappa from "../../assets/Kappa.png";
import DatSheffy from "../../assets/DatSheffy.png";
import cmonBruh from "../../assets/cmonBruh.png";
import BibleThump from "../../assets/BibleThump.png";
import KappaPride from "../../assets/KappaPride.png";
import KappaRoss from "../../assets/KappaRoss.png";
import NotLikeThis from "../../assets/NotLikeThis.png";
import WutFace from "../../assets/WutFace.png";

import { useSocketState } from "react-socket-io-hooks";

const BonusEmote = () => {
  const { bonusEmote } = useSocketState();

  const imageMap = {
    PogChamp: PogChamp,
    Kappa: Kappa,
    DatSheffy: DatSheffy,
    cmonBruh: cmonBruh,
    BibleThump: BibleThump,
    KappaPride: KappaPride,
    KappaRoss: KappaRoss,
    NotLikeThis: NotLikeThis,
    WutFace: WutFace,
  };

  return (
    <div className="BonusEmote">
      <div className="current-emote">
        <h1>
          Bonus Emote: <span>{bonusEmote}</span>
        </h1>
        <img src={imageMap[bonusEmote]} />
      </div>
      <Particles
        className="particles"
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 2,
              out_mode: "out",
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 6,
              },
              image: [
                {
                  src: imageMap[bonusEmote],
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  );
};

export default BonusEmote;
