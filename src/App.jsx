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
      // initialX: 250,
      // initialY: -50,
      // initialZoom: 0.8,
      // maxZoom: 2,
      // minZoom: 0.5,
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
          godName={"Eury"}
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
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <Line value={"connectFour"} />
        <Line value={"cornerRight"} />
        {/** ROW 13 */}
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile godName={"Metis"} />
        <Line value={"vertical"} />
        <GodProfile godName={"god"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <GodProfile
          handleComponentChange={handleComponentChange}
          componentOpen={componentOpen}
          godName={"Prometheus"}
        />
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        {/**ZEUS LINE */}
        <Line value={"vertical"} />
        <div className="space"></div>
        <div className="space"></div>
        <Line value={"vertical"} />
        <div className="space"></div>
        <GodProfile godName={"god1"} />
        <Line value={"vertical"} />
        <GodProfile godName={"god2"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <GodProfile godName={"god3"} />
        <Line value={"vertical"} />
        <div className="space"></div>
        <Line value={"vertical"} />
        <GodProfile godName={"god4"} />
        <Line value={"vertical"} />

        {/** ROW 14 */}
        <div className="space"></div>
        <div className="space"></div>
        <Line id="king-line" value={"vertical"} />
        <GodProfile godName={"Amphitrite"} />
        <div className="space"></div>
        <div className="space"></div>
        <GodProfile godName={"godd"} />
        <div className="space"></div>
        <GodProfile godName={"Atlas"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"atlaswifey"} />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"cornerLeft"} />
        <Line value={"connectDown"} />
        <Line value={"connectUp"} />
        <Line value={"cornerRight"} />
        <div className="space"></div>
        <GodProfile godName={"Helios"} />
        <div className="space"></div>
        <Line id="king-line" value={"cornerLeft"} />
        <GodProfile godName={"Leto"} />
        <div className="space"></div>
        <GodProfile godName={"goddd"} />
        <Line value={"connectDown"} />
        <GodProfile godName={"g0ddd"} />
        <div className="space"></div>
        <GodProfile godName={"good"} />

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
        <GodProfile godName={"Triton"} />
        <Line id="king-line" value={"cornerRight"} />
        <GodProfile godName={"Triton"} />

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
        <GodProfile godName={"Poseidon"} />
        <div className="space"></div>
        <GodProfile godName={"Poseidon"} />
        <div className="space"></div>
        <GodProfile godName={"Hera"} />
        <Line id="king-line" value={"rightAndUp"} />
        <GodProfile godName={"Hermes"} />

        {/** ZEUS LINE */}
        <Line value={"vertical"} />
        <Line id="king-line" value={"vertical"} />
        <div className="space"></div>
        <Line value={"cornerLeft"} />
        <GodProfile godName={"Demeter"} />
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
        <GodProfile godName={"Z"} />
        <GodProfile godName={"EU"} />
        <GodProfile godName={"S"} />
        <Line value={"across"} />
        <GodProfile godName={"Persephone"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line value={"across"} />
        <Line id="king-line " value={"connectFour"} />
        <Line value={"leftAndUp"} />

        {/** SECTION END ****** */}
      </section>
    </div>
  );
};

export default App;
