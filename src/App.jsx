import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import panzoom from "panzoom";
import "./App.css";
import GodProfile from "./components/god-profile/god-profile";
import AudioPlayer from "./components/audio-player/audio-player";
import mySong from "./assets/background-music.m4a";
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
  chaos,
} from "./assets/god-data";
import Line from "./components/line/line";

const App = () => {
  const canvasRef = useRef(null);
  const panzoomRef = useRef(null); // Create a ref to hold the panzoom instance

  useEffect(() => {
    const canvas = panzoom(canvasRef.current, {
      autocenter: true,

      initialX: 7000,
      initialY: 0,
    });

    panzoomRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleZoomIn = (xValue, yValue, zoomValue) => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(xValue, yValue, zoomValue); // Zooming in
    }
  };

  const handleZoomOut = (xValue, yValue, zoomValue) => {
    if (panzoomRef.current) {
      console.log("zooming out");
      panzoomRef.current.smoothZoom(xValue, yValue, zoomValue); // Zooming out smoothly
    }
  };

  const handlePan = (xValue, yValue) => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothMoveTo(xValue, yValue);
    }
  };

  const getZoomLevel = () => {
    if (panzoomRef.current) {
      return panzoomRef.current.getTransform();
    }
  };

  const element = document.querySelector("tree");

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
      {/* <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={getZoomLevel}>Get Zoom</button> */}
      <AudioPlayer source={mySong} />
      <section className="tree" ref={canvasRef}>
        {/** ROW 1 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/* ↓↓↓ ZEUS LINE, AFTER THIS THERE SHOULD BE 16 ELEMENTS */}
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...chaos}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** ROW 2 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value={"connectUp"} />
        <Line value={"across"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 3 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Nyx"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Erebus"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** ROW 4*/}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value={"connectUp"} />
        <Line value={"across"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 5 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Aither"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Hemera"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 6 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value={"connectUp"} />
        <Line value={"across"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 7 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Gaia"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Ouranos"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 8 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** ↓↓↓ ZEUS LINE */}
        <Line value={"vertical"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 9 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** ↓↓↓ ZEUS LINE */}
        <Line value={"vertical"} />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...aphrodite}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 10 */}
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
        <Line value={"connectDown"} />
        {/**ZEUS LINE */}
        <Line value={"connectFour"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
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
        <div className="space"></div>
        <div className="space"></div>
        {/**ROW 11 */}
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Mnemosyne"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Okeanos"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Tethys"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Lapetos"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Klymene"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Kronos"}
        />
        {/**ZEUS LINE */}
        <Line value={"connectFour"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Rhea"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Themis"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Hyperion"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Theia"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Koios"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Phoebe"}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Krios"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Eurybia"}
        />
        {/**ROW 12 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <Line value={"rightAndUpAndDown"} />
        <Line value={"connectDown"} />
        <Line value={"leftAndUpAndDown"} />
        <div className="space"></div>
        <div className="space"></div>
        {/*ZEUS LINE */}
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />

        {/** ROW 13 */}
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Metis"}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Amphitrite"}
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"The Okeanids"}
        />
        <div className="space"></div>
        <Line value={"vertical"} />
        <Line value={"vertical"} />

        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        {/**ZEUS LINE */}
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Eos"}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Helios"}
          x
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Selene"}
        />
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <Line value={"vertical"} />

        <Line value={"vertical"} />

        {/** ROW 14 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Epimethius"}
        />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          godName={"Prometheus"}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Atlas"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Pleione"}
        />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"cornerLeft"} />
        <Line value={"connectDown"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>

        <div className="space"></div>
        <Line id="king-line" value={"cornerLeft"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Leto"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Asteria"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Perses"}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Pallas"}
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Astraios"}
        />

        {/** ROW 15 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"The Moirai"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"The Horae"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Hecate"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** ROW 16 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Triton"}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Maia"}
        />
        <Line id="king-line" value={"cornerRight"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"The Pleiades"}
        />

        {/**ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/**ROW 17 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <Line value={"vertical"} />
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"connectFour"} />
        <Line value={"across"} />

        {/**ZEUS LINE */}
        <Line value={"connectFour"} />
        <Line value={"connectFour"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/**  ROW 18 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <Line value={"rightAndUp"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...poseidon}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hestia}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hera}
        />
        <Line id="king-line" value={"rightAndUp"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hermes}
        />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...demeter}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hades}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** line 19 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** LINE 20 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"rightAndUp"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"connectDown"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"connectFour"} />
        <Line id="king-line" value={"across"} />
        <GodProfile
          id="zeus"
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...zeus}
          cssClass="zeus"
          class2={"large-text"}
        />
        <Line id="king-line" value={"across"} />

        {/* <Line id="king-line" value={"connectFour"} /> */}

        {/* <Line value={"across"} /> */}
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Persephone"}
        />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line id="king-line " value={"connectFour"} />
        <Line value={"leftAndUp"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** LINE 21 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...athena}
        />
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"rightAndUp"} />
        <Line id="king-line" value={"connectDown"} />
        <Line id="king-line" value={"leftAndUp"} />
        <Line id="king-line" value={"vertical"} />

        {/** ZEUS LINE */}
        <Line id="king-line" value={"rightAndUp"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"connectDown"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"leftAndUp"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** LINE 22 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"across"} />
        <Line value={"connectDown"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />

        {/**ZEUS LINE */}
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/**LINE 23 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hephaestus}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"ARES"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Hebe"}
        />

        {/**ZEUS LINE */}
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...apollo}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...artemis}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** LINE 24 */}

        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/**ZEUS LINE */}

        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/**LIE 25 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          godName={"Semele"}
        />
        <Line id="king-line" value={"across"} />
        <Line id="king-line" value={"connectDown"} />
        <Line id="king-line" value={"leftAndUp"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        {/** LINE 26 */}
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...dionysus}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** SECTION END ****** */}
      </section>
    </div>
  );
};

export default App;
