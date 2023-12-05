import React from "react";

const AudioPlayer = ({ source, audioRef }) => {
  return (
    <div>
      <audio
        ref={audioRef}
        src={source}
        loop
        style={{ height: 20, color: "red" }}
      >
        {/* <source src={source} type="audio/mp3" autoPlay />  */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
