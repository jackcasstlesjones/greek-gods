import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import panzoom from "panzoom";
import "./App.css";
import GodProfile from "./components/god-profile/god-profile";
import { zeus } from "./assets/god-data";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = panzoom(canvasRef.current, {
      autocenter: true,
      initialX: 0,
      initialY: 0,
    });

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
        <GodProfile
          godName={zeus.godName}
          godInfo={zeus.info}
          cssClass={zeus.cssClass}
        />
        <div className="div"></div>
        <div className="div"></div>
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
        <GodProfile />
      </div>
    </div>
  );
};

export default App;
