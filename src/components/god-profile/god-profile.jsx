import { useSyncExternalStore } from "react";
import "./god-profile.css";
import { useState } from "react";
import zeusImg from "../../assets/imgs/zeus.webp";
import dionysusImg from "../../assets/imgs/dionysus.webp";

export default function GodProfile({
  godName,
  godTitle,
  godInfo,
  cssClass,
  imgSrc,
}) {
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
  if (show === false) {
    return (
      <div
        onMouseEnter={handleClick}
        className={`god-container-closed ${cssClass}`}
      >
        <h2>{godName}</h2>
      </div>
    );
  } else if (show === true) {
    return (
      <div
        onMouseLeave={handleClick}
        onClick={handleClick}
        className={`god-container-open ${cssClass}`}
      >
        <div className="left-side">
          <h2>
            {godName}, {godTitle}
          </h2>

          <div className="small-container">
            <p>{godInfo}</p>
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
        </div>
      </div>
    );
  }
}
