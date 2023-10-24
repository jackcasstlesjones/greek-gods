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
  const panzoomRef = useRef(null); // Create a ref to hold the panzoom instance

  useEffect(() => {
    const canvas = panzoom(canvasRef.current, {
      autocenter: true,
      // initialX: 250,
      // initialY: -50,
      // initialZoom: 0.8,
      // maxZoom: 2,
      // minZoom: 0.5,
    });

    panzoomRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleZoomIn = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(0, 0, 2); // Zooming in
    }
  };

  const handleZoomOut = () => {
    if (panzoomRef.current) {
      panzoomRef.current.smoothZoom(0, 0, 0.5); // Zooming out smoothly
    }
  };

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
      <button onClick={handleZoomIn}>Zoom In</button>
      <button onClick={handleZoomOut}>Zoom Out</button>
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
          componentOpen={componentOpen}
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
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Nyx"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          handleComponentChange={handleComponentChange}
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
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Aither"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          handleComponentChange={handleComponentChange}
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
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Gaia"}
        />
        <Line value="across" />
        {/** ↓↓↓ ZEUS LINE */}
        <Line value="connectDown" />
        <Line value="across" />
        <GodProfile
          handleComponentChange={handleComponentChange}
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
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Aphrodite"}
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
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Mnemosyne"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Okeanos"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Tethys"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Lapetos"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Klymene"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Kronos"}
        />
        {/**ZEUS LINE */}
        <Line value={"connectFour"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Rhea"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Themis"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Hyperion"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Theia"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Koios"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Phoebe"}
        />
        <div className="space"></div>
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Krios"}
        />
        <Line value={"connectDown"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
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
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Prometheus"}
        />
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
        <GodProfile godName={"DEMETER"} />
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
