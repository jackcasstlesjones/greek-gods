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
  nyx,
  aither,
  erebus,
  hemera,
  gaia,
  ouranos,
  mnemosyne,
  oceanus,
  tethys,
  iapetus,
  klymene,
  kronos,
  rhea,
  themis,
  hyperion,
  theia,
  koios,
  phoebe,
  krios,
  eurybia,
  metis,
  amphitrite,
  theOceanids,
  eos,
  helios,
  selene,
  epimethius,
  prometheus,
  atlas,
  pleione,
  leto,
  asteria,
  perses,
  pallas,
  astraeus,
  theMorai,
  theHorai,
  hecate,
  triton,
  maia,
  thePleiades,
  persephone,
  ares,
  hebe,
  semele,
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
          {...nyx}
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
          {...erebus}
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
          {...aither}
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
          {...hemera}
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
          {...gaia}
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
          {...ouranos}
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
          {...mnemosyne}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...oceanus}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...tethys}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...iapetus}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...klymene}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...kronos}
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
          {...rhea}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...themis}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hyperion}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...theia}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...koios}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...phoebe}
        />
        <div className="space"></div>
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...krios}
        />
        <Line value={"connectDown"} />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...eurybia}
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
          {...metis}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...amphitrite}
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...theOceanids}
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
          {...eos}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...helios}
          x
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...selene}
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
          {...epimethius}
        />
        <GodProfile
          componentOpen={componentOpen}
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          {...prometheus}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...atlas}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...pleione}
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
          {...leto}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...asteria}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...perses}
        />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...pallas}
        />

        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...astraeus}
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
          {...theMorai}
          replaceLink={true}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...theHorai}
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
          {...hecate}
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
          {...triton}
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
          {...maia}
        />
        <Line id="king-line" value={"cornerRight"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...thePleiades}
          replaceLink={true}
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
          {...persephone}
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
          {...ares}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          getZoomLevel={getZoomLevel}
          componentOpen={componentOpen}
          {...hebe}
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
          {...semele}
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
