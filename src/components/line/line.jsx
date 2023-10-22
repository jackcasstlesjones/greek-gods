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
    </div>
  );
}
