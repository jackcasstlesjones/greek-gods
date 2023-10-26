import React from "react";

const AudioPlayer = ({ source }) => {
  return (
    <div>
      <audio loop style={{ height: 20, color: "red" }} controls>
        <source src={source} type="audio/mp3" autoPlay />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
