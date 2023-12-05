import { useState } from "react";
import "./modal.css";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className={modalOpen === true ? "modal" : null}>
      <h1 className="modal-title">
        Welcome to Olympiatree, an interactive family tree of the Greek Gods
      </h1>
      <ul>
        <li>Click and drag to move around the tree.</li>
        <li>Scroll or pinch to zoom in or out.</li>
        <li>Click on the name of a God to see more information about them.</li>
      </ul>
    </div>
  );
}
