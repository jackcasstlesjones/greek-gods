import { useSyncExternalStore } from "react";
import "./god-profile.css";
import { useState } from "react";
import zeusImg from "../../assets/imgs/zeus.webp";
import dionysusImg from "../../assets/imgs/dionysus.webp";

export default function GodProfile({ godName, godTitle, godInfo }) {
  const [show, setShow] = useState(false);

  let img;

  if (godName === "Zeus") {
    img = zeusImg;
  } else if (godName === "Dionysus") {
    img = dionysusImg;
  }
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
        <h2 onClick={handleOpen}>{godName}</h2>
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
