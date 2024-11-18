import React, { useRef, useState } from "react";
import Confetti, { ConfettiRef } from "./Animations/Confetti";
import SnowOverlay from "./Animations/SnowOverlay";
import SVGComponent from "./SVGComponent";
import NaughtyMeter from "./NaughtyMeter";

interface controlPanelProps {
  setShowTeam: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ControlPanel({ setShowTeam }: controlPanelProps) {
  const confettiRef = useRef<ConfettiRef>(null);
  const [showSnowOverlay, setShowSnowOverlay] = useState<boolean>(false);
  const [showNaughtyMeter, setShowNaughtyMeter] = useState<boolean>(false);
  const [lightsOut, setLightsOut] = useState<boolean>(false);

  const handleFireworkClick = () => {
    if (confettiRef.current) {
      confettiRef.current.fireConfetti();
    }
  };
  return (
    <div className={`control_panel ${lightsOut ? "lights_out" : ""}`}>
      <div className="button_wrapper">
        <button
          className="light_button"
          onClick={() => setLightsOut(!lightsOut)}
        >
          <SVGComponent svgUrl="/light-bulb.svg" />
        </button>
        <div className="music_buttons">
          <button className="music_button">
            <img src="/music-note.svg" alt="music note" />
          </button>
          <button className="music_button">
            <img src="/music-note.svg" alt="music note" />
          </button>
          <button className="music_button">
            <img src="/music-note.svg" alt="music note" />
          </button>
        </div>
      </div>
      <div className="radar">
        <span className="radar_cross"></span>
        <span className="radar_sweep"></span>
        <button className="radar_button">Poišči jelene</button>
      </div>
      <div className="button_wrapper">
        <button onClick={() => setShowNaughtyMeter(!showNaughtyMeter)}>
          <img src="/naughty-nice.svg" alt="naughty/nice meter" />
        </button>
        <button
          className="firework_button"
          onClick={() => setShowSnowOverlay(!showSnowOverlay)}
        >
          <img src="/snowflake.svg" alt="snowflake" />
        </button>
        <button className="firework_button" onClick={handleFireworkClick}>
          <img src="/fireworks.svg" alt="fireworks" />
        </button>
        <button className="team_button" onClick={() => setShowTeam(true)}>
          <img src="/deer.svg" alt="" />
          <span>0/10</span>
        </button>
      </div>
      <Confetti ref={confettiRef} />
      {showSnowOverlay && <SnowOverlay />}
      {showNaughtyMeter && (
        <NaughtyMeter setShowNaughtyMeter={setShowNaughtyMeter} />
      )}
    </div>
  );
}
