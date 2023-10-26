import { useSyncExternalStore, useEffect, useRef } from "react";
import "./god-profile.css";
import arrowIcon from "../../assets/arrow-icon.svg";

import { useState } from "react";
import zeusImg from "../../assets/imgs/zeus.webp";
import dionysusImg from "../../assets/imgs/dionysus.webp";
import hadesImg from "../../assets/imgs/hades.webp";
import demeterImg from "../../assets/imgs/demeter.webp";
import aphroditeImg from "../../assets/imgs/aphrodite.jpeg";
import poseidonImg from "../../assets/imgs/poseidon.jpeg";
import hestiaImg from "../../assets/imgs/hestia.jpg";
import athenaImg from "../../assets/imgs/athena.jpeg";
import heraImg from "../../assets/imgs/hera.webp";

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
    Zeus: zeusImg,
    Dionysus: dionysusImg,
    Hades: hadesImg,
    Demeter: demeterImg,
    Aphrodite: aphroditeImg,
    Poseidon: poseidonImg,
    Hestia: hestiaImg,
    Athena: athenaImg,
    Hera: heraImg,
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
              <div className="learn-more-container">
                <h3>Learn More</h3>
                <div className="arrow-icon">
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
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
              </div>
            </a>
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
