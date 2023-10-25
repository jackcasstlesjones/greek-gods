import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
// import panzoom from "panzoom";
import Panzoom from "@panzoom/panzoom";

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
    const elem = canvasRef.current;
    const panzoom = Panzoom(elem, {
      minScale: -10,
      // Other options can be set here
    });

    // Example usage: panning and zooming
    // panzoom.pan(10, 10);
    // panzoom.zoom(2, { animate: true });

    // Panning and pinch zooming are bound automatically (unless disablePan is true).
    // There are several available methods for zooming
    // that can be bound on button clicks or mousewheel.

    // For example:
    // button.addEventListener('click', panzoom.zoomIn);
    // elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

    // Remember to clean up the panzoom instance when the component is unmounted
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <section ref={canvasRef}>
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
          // handleZoomIn={handleZoomIn}
          // handleZoomOut={handleZoomOut}
          // getZoomLevel={getZoomLevel}
          // handlePan={handlePan}
          // handleComponentChange={handleComponentChange}
          // componentOpen={componentOpen}
          godName="Chaos"
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
        <GodProfile godName={"Nyx"} />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile godName={"Erebus"} />
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
        <GodProfile godName={"Aither"} />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile godName={"Hemera"} />
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
        <GodProfile godName={"Gaia"} />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile godName={"Ouranos"} />
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
        <GodProfile godName={"Aphrodite"} />
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
        <GodProfile godName={"Mnemosyne"} />
        <div className="space"></div>
        <GodProfile godName={"Okeanos"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Tethys"} />
        <div className="space"></div>
        <GodProfile godName={"Lapetos"} />
        <div className="space"></div>
        <GodProfile godName={"Klymene"} />
        <div className="space"></div>
        <GodProfile godName={"Kronos"} />
        {/**ZEUS LINE */}
        <Line value={"connectFour"} />
        <GodProfile godName={"Rhea"} />
        <div className="space"></div>
        <GodProfile godName={"Themis"} />
        <div className="space"></div>
        <GodProfile godName={"Hyperion"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Theia"} />
        <div className="space"></div>
        <GodProfile godName={"Koios"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Phoebe"} />
        <div className="space"></div>
        <GodProfile godName={"Krios"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Eurybia"} />
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
        <GodProfile godName={"Metis"} />
        <GodProfile godName={"Amphitrite"} />
        <GodProfile godName={"The Okeanids"} />
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
        <GodProfile godName={"Eos"} />
        <GodProfile godName={"Helios"} x />
        <GodProfile godName={"Selene"} />
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
        <GodProfile godName={"Epimethius"} />
        <GodProfile godName={"Prometheus"} />
        <GodProfile godName={"Atlas"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Pleione"} />
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
        <GodProfile godName={"Leto"} />
        <div className="space"></div>
        <GodProfile godName={"Asteria"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"Perses"} />
        <GodProfile godName={"Pallas"} />
        <GodProfile godName={"Astraios"} />
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
        <GodProfile godName={"The Moirai"} />
        <div className="space"></div>
        <GodProfile godName={"The Horae"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile godName={"Hecate"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        {/** ROW 16 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <GodProfile godName={"Triton"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile godName={"Maia"} />
        <Line id="king-line" value={"cornerRight"} />
        <GodProfile godName={"The Pleiades"} />
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
        <GodProfile godName={"POSEIDON"} />
        <div className="space"></div>
        <GodProfile godName={"HESTIA"} />
        <div className="space"></div>
        <GodProfile godName={"HERA"} />
        <Line id="king-line" value={"rightAndUp"} />
        <GodProfile godName={"HERMES"} />
        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <GodProfile
          godName={"DEMETER"}
          // handleZoomIn={handleZoomIn}
          // handleZoomOut={handleZoomOut}
          // getZoomLevel={getZoomLevel}
          // handlePan={handlePan}
          // handleComponentChange={handleComponentChange}
          // componentOpen={componentOpen}
        />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <GodProfile godName={"Hades"} />
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
          godName={"Zeus"}
          cssClass="zeus"
          class2={"large-text"}
        />
        <Line id="king-line" value={"across"} />
        {/* <Line id="king-line" value={"connectFour"} /> */}
        {/* <Line value={"across"} /> */}
        <GodProfile godName={"Persephone"} />
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
        <GodProfile godName={"ATHENA"} />
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
        <GodProfile godName={"HEPHAESTUS"} />
        <div className="space"></div>
        <GodProfile godName={"ARES"} />
        <div className="space"></div>
        <GodProfile godName={"Hebe"} />
        {/**ZEUS LINE */}
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile godName={"APOLLO"} />
        <div className="space"></div>
        <GodProfile godName={"ARTEMIS"} />
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
        <GodProfile godName={"Semele"} />
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
        <GodProfile godName={"DIONYSUS"} />
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
