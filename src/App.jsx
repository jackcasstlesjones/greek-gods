import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";

import panzoom from "panzoom";
import "./App.css";
import GodProfile from "./components/god-profile/god-profile";
import AudioPlayer from "./components/audio-player/audio-player";
import Modal from "./components/modal/modal";
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

  // const handlePan = (xValue, yValue) => {
  //   if (panzoomRef.current) {
  //     panzoomRef.current.smoothMoveTo(xValue, yValue);
  //   }
  // };

  const getZoomLevel = () => {
    if (panzoomRef.current) {
      return panzoomRef.current.getTransform();
    }
  };

  const [openGod, setOpenGod] = useState("");

  const handleGodChange = (uuid) => {
    setOpenGod(uuid);
  };

  return (
    <>
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
        <Modal />
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...gaia}
          />
          <Line value="across" />
          {/** ↓↓↓ ZEUS LINE */}
          <Line value="connectDown" />
          <Line value="across" />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...mnemosyne}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...oceanus}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...tethys}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...iapetus}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...klymene}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...kronos}
          />
          {/**ZEUS LINE */}
          <Line value={"connectFour"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...rhea}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...themis}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hyperion}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...theia}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...koios}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...phoebe}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...krios}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...metis}
          />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...amphitrite}
          />

          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...eos}
          />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...helios}
            x
          />

          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...epimethius}
          />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...prometheus}
          />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...atlas}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...leto}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...asteria}
          />
          <Line value={"connectDown"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...perses}
          />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...pallas}
          />

          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...theMorai}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...triton}
          />
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...maia}
          />
          <Line id="king-line" value={"cornerRight"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...thePleiades}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...poseidon}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hestia}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hera}
          />
          <Line id="king-line" value={"rightAndUp"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hermes}
          />

          {/** ZEUS LINE */}
          <Line value={"vertical"} />
          <Line id="king-line" value={"vertical"} />
          <div className="space"></div>
          <Line value={"cornerLeft"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...demeter}
          />
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <Line id="king-line" value={"vertical"} />
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            id="zeus"
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...zeus}
            cssClass="zeus"
            class2={"large-text"}
          />
          <Line id="king-line" value={"across"} />

          {/* <Line id="king-line" value={"connectFour"} /> */}

          {/* <Line value={"across"} /> */}
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hephaestus}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...ares}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...hebe}
          />

          {/**ZEUS LINE */}
          <Line id="king-line" value={"vertical"} />
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
            {...apollo}
          />
          <div className="space"></div>
          <GodProfile
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
            handleGodChange={handleGodChange}
            openGod={openGod}
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
            getZoomLevel={getZoomLevel}
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
    </>
  );
};

export default App;
