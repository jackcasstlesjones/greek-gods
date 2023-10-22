import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import panzoom from "panzoom";
import "./App.css";
import GodProfile from "./components/god-profile/god-profile";
import {
  zeus,
  dionysus,
  poseidon,
  hestia,
  hera,
  demeter,
  hades,
} from "./assets/god-data";
import Line from "./components/line/line";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = panzoom(canvasRef.current, {
      autocenter: true,
      initialX: 0,
      initialY: 0,
    });

    // canvas.zoomAbs(null, null, null, null, 0.5);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="tree" ref={canvasRef}>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"cornerRight"} />

        <GodProfile
          godName={hades.godName}
          godTitle={hades.godTitle}
          godInfo={hades.info}
          cssClass={hades.cssClass}
        />
        <div className="div"></div>
        <GodProfile
          godName={poseidon.godName}
          godTitle={poseidon.godTitle}
          godInfo={poseidon.info}
        />
        <div className="div"></div>
        <GodProfile
          godName={hestia.godName}
          godTitle={hestia.godTitle}
          godInfo={hestia.info}
        />
        <div className="div"></div>
        <GodProfile
          godName={demeter.godName}
          godTitle={demeter.godTitle}
          godInfo={demeter.info}
        />
        <div className="div"></div>
        <GodProfile
          godName={zeus.godName}
          godTitle={zeus.godTitle}
          godInfo={zeus.info}
        />
        <div className="div"></div>
        <GodProfile
          godName={hera.godName}
          godTitle={hera.godTitle}
          godInfo={hera.info}
        />
        <Line value={"across"} />
        <Line value={"leftAndUp"} />
        <Line value={"across"} />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
        <GodProfile />
      </div>
    </div>
  );
};

export default App;
