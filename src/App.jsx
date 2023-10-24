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
      <div className="tree" ref={canvasRef}></div>
    </div>
  );
};

export default App;
