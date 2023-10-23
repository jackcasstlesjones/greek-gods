import React, { useEffect, useRef, useState } from "react";
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
  artemis,
  apollo,
  athena,
  hermes,
  hephaestus,
  aphrodite,
} from "./assets/god-data";
import Line from "./components/line/line";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = panzoom(canvasRef.current, {
      autocenter: true,
      initialX: 250,
      initialY: -50,
      initialZoom: 0.8,
      maxZoom: 2,
      minZoom: 0.5,
    });

    // canvas.zoomAbs(null, null, null, null, 0.5);

    return () => {
      canvas.dispose();
    };
  }, []);

  const [componentOpen, setComponentOpen] = useState(false);

  const handleComponentChange = () => {
    setComponentOpen((prevState) => !prevState);
  };

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
        <Line value={"connectUp"} />
        <Line value={"connectDown"} />
        <Line value={"connectUp"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"cornerRight"} />
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        {/*            *************************          */}
        <GodProfile
          godName={hades.godName}
          godTitle={hades.godTitle}
          godInfo={hades.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={poseidon.godName}
          godTitle={poseidon.godTitle}
          godInfo={poseidon.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={hestia.godName}
          godTitle={hestia.godTitle}
          godInfo={hestia.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={demeter.godName}
          godTitle={demeter.godTitle}
          godInfo={demeter.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={zeus.godName}
          godTitle={zeus.godTitle}
          godInfo={zeus.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <Line value={"connectDown"} />
        <GodProfile
          godName={hera.godName}
          godTitle={hera.godTitle}
          godInfo={hera.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"connectDown"} />
        <Line value={"connectDown"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"leftAndUpAndDown"} />
        <Line value={"vertical"} />
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        {/********************************/}
        <Line value={"vertical"} />
        <Line value={"vertical"} />
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <Line value={"vertical"} />
        <GodProfile
          godName={hephaestus.godName}
          godTitle={hephaestus.godTitle}
          godInfo={hephaestus.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <GodProfile
          godName={artemis.godName}
          godTitle={artemis.godTitle}
          godInfo={artemis.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />{" "}
        <Line value={"vertical"} />
        <GodProfile
          godName={apollo.godName}
          godTitle={apollo.godTitle}
          godInfo={apollo.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={athena.godName}
          godTitle={athena.godTitle}
          godInfo={athena.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <Line value={"vertical"} />
        <div className="div"></div>
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <Line value={"vertical"} />
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <GodProfile
          godName={aphrodite.godName}
          godTitle={aphrodite.godTitle}
          godInfo={aphrodite.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={hermes.godName}
          godTitle={hermes.godTitle}
          godInfo={hermes.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <GodProfile
          godName={dionysus.godName}
          godTitle={dionysus.godTitle}
          godInfo={dionysus.info}
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
        />
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <GodProfile godName={"hephy"} />
      </div>
    </div>
  );
};

export default App;
