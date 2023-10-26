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
  handleComponentChange,
  componentOpen,
  handleZoomIn,
  handleZoomOut,
  getZoomLevel,
}) {
  const [show, setShow] = useState(false);

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

  function switchBoolean(value) {
    setShow(!value);
  }

  const handleCloseButtonClick = () => {
    if (!componentOpen) return;
    handleComponentChange();
    switchBoolean(show);

    const rect = elementRef.current.getBoundingClientRect();
    handleZoomOut(rect.x, rect.y, 0.4);
  };
  const handleOpen = (event) => {
    if (componentOpen) return;

    const rect = elementRef.current.getBoundingClientRect();
    handleComponentChange();
    switchBoolean(show);
    const { scale } = getZoomLevel();
    console.log(scale);

    if (scale <= 0.2) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 5);
    } else if (scale <= 0.3) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 4);
    } else if (scale <= 0.4) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 3);
    } else if (scale <= 0.5) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 2.5);
    } else if (scale <= 0.6) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.8);
    } else if (scale <= 0.7) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.5);
    } else if (scale <= 0.8) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1.3);
    } else if (scale <= 0.9) {
      console.log(scale);
      handleZoomIn(rect.x, rect.y, 1);
    }
  };

  return (
    <>
      <div ref={elementRef} className={`god-container ${cssClass} `}>
        <h2 className={`${class2} closed-godname`} onClick={handleOpen}>
          {godName}
        </h2>
        <div className="modal"></div>
        <div className={show === true ? `modal open` : "closed"}>
          <div className="left-side">
            <h2
              className={
                show === true ? "open-godname open-text" : "closed-text"
              }
            >
              {godName}, {godTitle}
            </h2>
            <div
              className={
                show === true ? "small-container open-text" : "closed-text"
              }
            >
              <p className="god-info">{godInfo}</p>
              <div className="relations-container">
                <ul className="relations-list">
                  <li>{uuid}</li>
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
              </div>
            </div>
            <a
              className={show ? `learn-more-link open-text` : `closed-text`}
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
                show === true ? "close-button open-text" : "closed-text"
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
