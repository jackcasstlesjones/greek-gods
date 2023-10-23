import { useSyncExternalStore } from "react";
import "./god-profile.css";
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

export default function GodProfile({ godName, godTitle, godInfo }) {
  const [show, setShow] = useState(false);

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

  const handleClick = () => {
    switchBoolean(show);
  };
  const handleOpen = () => {
    if (show == true) return;
    switchBoolean(show);
  };

  return (
    <>
      <div className={`god-container`}>
        <h2 className="closed-godname" onClick={handleOpen}>
          {godName}
        </h2>
        <div className="modal"></div>
        <div className={show === true ? `modal open` : "closed"}>
          <div className="left-side">
            <h2>
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
                  <li>Parents</li>
                  <li>Chronos</li>
                  <li>Hermea</li>
                </ul>
                <ul className="relations-list">
                  <li>Siblings</li>
                </ul>
                <ul className="relations-list">
                  <li>Children</li>
                </ul>
                <ul className="relations-list">
                  <li>Spouse</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img className="god-img" src={img} alt="" />
            <button onClick={handleClick} className="close-button">
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
