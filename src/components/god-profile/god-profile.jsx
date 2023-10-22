import { useSyncExternalStore } from "react";
import "./god-profile.css";
import { useState } from "react";

export default function GodProfile({ godName, godInfo, cssClass }) {
  const [show, setShow] = useState(false);

  function switchBoolean(value) {
    setShow(!value);
  }

  const handleClick = () => {
    switchBoolean(show);
  };
  if (show === false) {
    return (
      <div onClick={handleClick} className={`god-container ${cssClass}`}>
        <h2>{godName}</h2>
      </div>
    );
  } else if (show === true) {
    return (
      <div onClick={handleClick} className={`god-container open ${cssClass}`}>
        <h2>{godName}</h2>
        <p>{godInfo}</p>
      </div>
    );
  }
}
