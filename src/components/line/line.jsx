import "./line.css";

export default function Line({ value }) {
  return (
    <div className="line-container">
      {value === "leftAndUp" && (
        <>
          <div className="left-half"></div>
          <div className="up-half"></div>
        </>
      )}
      {value === "across" && (
        <>
          <div className="across"></div>
        </>
      )}
      {value === "rightAndUp" && (
        <>
          <div className="right-half"></div>
          <div className="up-half"></div>
        </>
      )}
      {value === "connectDown" && (
        <>
          <div className="across"></div>
          <div className="down-half"></div>
        </>
      )}
      {value === "cornerLeft" && (
        <>
          <div className="right-half"></div>
          <div className="down-half"></div>
        </>
      )}
      {value === "cornerRight" && (
        <>
          <div className="left-half"></div>
          <div className="down-half"></div>
        </>
      )}
      {value === "connectDown" && (
        <>
          <div className="across"></div>
          <div className="down-half"></div>
        </>
      )}
      {value === "leftAndUpAndDown" && (
        <>
          <div className="left-half"></div>
          <div className="vertical"></div>
        </>
      )}
      {value === "vertical" && (
        <>
          <div className="vertical"></div>
        </>
      )}
      {value === "connectUp" && (
        <>
          <div className="up-half"></div>
          <div className="across"></div>
        </>
      )}
    </div>
  );
}
