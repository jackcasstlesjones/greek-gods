import { useSyncExternalStore, useEffect, useRef } from "react";
import "./god-profile.css";
import arrowIcon from "../../assets/arrow-icon.svg";

import { useState } from "react";

import aetherImg from "../../assets/imgs/aether.png";
import athenaImg from "../../assets/imgs/athena.jpeg";
import amphitriteImg from "../../assets/imgs/amphitrite.jpeg";
import aphroditeImg from "../../assets/imgs/aphrodite.jpeg";
import apolloImg from "../../assets/imgs/apollo.jpeg";
import aresImg from "../../assets/imgs/ares.jpeg";
import artemisImg from "../../assets/imgs/artemis.webp";
import asteriaImg from "../../assets/imgs/asteria.png";
import astraeusImg from "../../assets/imgs/astraeus.png";
import atlasImg from "../../assets/imgs/atlas.jpeg";
import chaosImg from "../../assets/imgs/chaos.png";
import criusImg from "../../assets/imgs/crius.png";
import demeterImg from "../../assets/imgs/demeter.webp";
import dionysusImg from "../../assets/imgs/dionysus.webp";
import eosImg from "../../assets/imgs/eos.png";
import epimetheusImg from "../../assets/imgs/epimetheus.webp";
import erebusImg from "../../assets/imgs/erebus.jpeg";
import eurybiaImg from "../../assets/imgs/eurybia.png";
import gaiaImg from "../../assets/imgs/gaia.webp";
import hadesImg from "../../assets/imgs/hades.webp";
import hebeImg from "../../assets/imgs/hebe.png";
import hecateImg from "../../assets/imgs/hecate.png";
import heliosImg from "../../assets/imgs/helios.jpeg";
import hemeraImg from "../../assets/imgs/hemera.png";

import hephaestusImg from "../../assets/imgs/hephaestus.jpeg";
import hermesImg from "../../assets/imgs/hermes.jpeg";
import heraImg from "../../assets/imgs/hera.webp";
import hestiaImg from "../../assets/imgs/hestia.jpg";
import horaeImg from "../../assets/imgs/horae.png";
import hyperionImg from "../../assets/imgs/hyperion.png";
import iapetusImg from "../../assets/imgs/iapetus.webp";
import klymeneImg from "../../assets/imgs/klymene.png";
import koiosImg from "../../assets/imgs/koios.png";
import kronosImg from "../../assets/imgs/kronos.jpeg";
import letoImg from "../../assets/imgs/leto.png";
import maiaImg from "../../assets/imgs/maia.png";
import metisImg from "../../assets/imgs/metis.png";
import mnemosyneImg from "../../assets/imgs/mnemosyne.webp";
import moraiImg from "../../assets/imgs/morai.png";
import nyxImg from "../../assets/imgs/nyx.jpeg";
import oceanusImg from "../../assets/imgs/oceanus.jpeg";
import oceanidsImg from "../../assets/imgs/oceanids.png";
import ouranosImg from "../../assets/imgs/ouranos.png";
import pallasImg from "../../assets/imgs/pallas.png";
import persephoneImg from "../../assets/imgs/persephone.jpg";
import persesImg from "../../assets/imgs/perses.png";
import phoebeImg from "../../assets/imgs/phoebe.png";
import pleiadesImg from "../../assets/imgs/pleiades.png";
import pleioneImg from "../../assets/imgs/pleione.png";
import poseidonImg from "../../assets/imgs/poseidon.jpeg";
import prometheusImg from "../../assets/imgs/prometheus.webp";
import rheaImg from "../../assets/imgs/rhea.webp";
import seleneImg from "../../assets/imgs/selene.png";
import semeleImg from "../../assets/imgs/semele.png";
import tethysImg from "../../assets/imgs/tethys.jpeg";
import theiaImg from "../../assets/imgs/theia.png";
import themisImg from "../../assets/imgs/themis.png";
import tritonImg from "../../assets/imgs/triton.jpeg";
import zeusImg from "../../assets/imgs/zeus.webp";

export default function GodProfile({
  uuid,
  godName,
  godTitle,
  godInfo,
  godLink,
  cssClass,
  class2,
  handleZoomIn,
  handleZoomOut,
  getZoomLevel,
  handleGodChange,
  openGod,
}) {
  const elementRef = useRef(null); // Create a ref for the element

  const godImages = {
    Aether: aetherImg,
    Amphitrite: amphitriteImg,
    Aphrodite: aphroditeImg,
    Apollo: apolloImg,
    Ares: aresImg,
    Artemis: artemisImg,
    Asteria: asteriaImg,
    Astraeus: astraeusImg,
    Athena: athenaImg,
    Atlas: atlasImg,
    Chaos: chaosImg,
    Crius: criusImg,
    Demeter: demeterImg,
    Dionysus: dionysusImg,
    Eos: eosImg,
    Epimetheus: epimetheusImg,
    Erebus: erebusImg,
    Eurybia: eurybiaImg,
    Gaia: gaiaImg,
    Hades: hadesImg,
    Hebe: hebeImg,
    Hecate: hecateImg,
    Helios: heliosImg,
    Hemera: hemeraImg,
    Hephaestus: hephaestusImg,
    Hera: heraImg,
    Hermes: hermesImg,
    Hestia: hestiaImg,
    "The Horae": horaeImg,
    Hyperion: hyperionImg,
    Iapetus: iapetusImg,
    Klymene: klymeneImg,
    Koios: koiosImg,
    Kronos: kronosImg,
    Leto: letoImg,
    Maia: maiaImg,
    Metis: metisImg,
    Mnemosyne: mnemosyneImg,
    "The Moirai": moraiImg,
    Nyx: nyxImg,
    Oceanus: oceanusImg,
    "The Oceanids": oceanidsImg,
    Ouranos: ouranosImg,
    Pallas: pallasImg,
    Persephone: persephoneImg,
    Perses: persesImg,
    Phoebe: phoebeImg,
    "The Pleiades": pleiadesImg,
    Pleione: pleioneImg,
    Poseidon: poseidonImg,
    Prometheus: prometheusImg,
    Rhea: rheaImg,
    Selene: seleneImg,
    Semele: semeleImg,
    Tethys: tethysImg,
    Theia: theiaImg,
    Themis: themisImg,
    Triton: tritonImg,
    Zeus: zeusImg,
  };

  const img = godImages[godName];

  const handleCloseButtonClick = () => {
    handleGodChange("");

    const rect = elementRef.current.getBoundingClientRect();
    handleZoomOut(rect.x, rect.y, 0.6);
  };

  const handleOpen = (event) => {
    handleGodChange(uuid);

    /**ZOOM FUNCTIONALITY */
    const rect = elementRef.current.getBoundingClientRect();
    const { scale } = getZoomLevel();
    console.log(scale);

    if (scale <= 0.2) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 4);
    } else if (scale <= 0.3) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 3);
    } else if (scale <= 0.4) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 2.25);
    } else if (scale <= 0.5) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.7);
    } else if (scale <= 0.6) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.5);
    } else if (scale <= 0.7) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.4);
    }
    //  else if (scale <= 0.7) {
    //   console.log(scale);
    //   handleZoomIn(rect.x, rect.y, 1.2);
    // }
    // else if (scale <= 0.9) {
    //   console.log(scale);
    //   handleZoomIn(rect.x, rect.y, 1);
    // }
  };

  return (
    <>
      <div ref={elementRef} className={`god-container ${cssClass} `}>
        <h2 className={`${class2} closed-godname`} onClick={handleOpen}>
          {godName}
        </h2>
        <div className={openGod === uuid ? `open` : "closed"}>
          <div className="left-side">
            <h2
              className={
                openGod === uuid ? "open-godname open-text" : "closed-text"
              }
            >
              {godName}, {godTitle}
            </h2>
            <div
              className={
                openGod === uuid ? "small-container open-text" : "closed-text"
              }
            >
              <p className="god-info">{godInfo}</p>
              {/* <div className="relations-container">
                <ul className="relations-list">
                  <li>Parents</li>
                  <li>
                    <a href="#prometheus">Prometheus</a>
                  </li>
                  <li>Hermea</li>
                </ul>
                <ul className="relations-list">
                  <li>Siblings</li>
                </ul>
                <ul className="relations-list">
                  <li>Children</li>
                </ul>
                <ul className="relations-list">
                  <li></li>
                </ul>
              </div> */}
            </div>
            <div
              className={
                openGod === uuid
                  ? `learn-more-container open-text`
                  : `closed-text`
              }
            >
              <a
                className={
                  openGod === uuid ? `learn-more-link open-text` : `closed-text`
                }
                target="_blank"
                rel="nonreferrer"
                href={
                  godLink ? godLink : `https://en.wikipedia.org/wiki/${godName}`
                }
              >
                Learn More
                <div className="arrow-icon">
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="right-side">
            <img className="god-img" src={img} alt="" />
            <button
              onClick={handleCloseButtonClick}
              className={
                openGod === uuid ? "close-button open-text" : "closed-text"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
