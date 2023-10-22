import "./god-profile.css";

export default function GodProfile({ godName, godInfo, cssClass }) {
  return (
    <div className={`god-container ${cssClass}`}>
      <h2>{godName}</h2>
      <p>{godInfo}</p>
    </div>
  );
}
