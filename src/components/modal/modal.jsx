import { useState } from "react";
import "./modal.css";

export default function Modal({ startAudio }) {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => setModalOpen(false);

  const closeAndAudio = () => {
    closeModal();
    startAudio();
  };

  return (
    <div className={modalOpen === true ? "modal" : "closed"}>
      <h1 className="modal-title">
        Welcome to Olympiatree, an interactive family tree of the Greek Gods
      </h1>
      <ul>
        <li>Click and drag to move around the tree.</li>
        <li>Double click to zoom in.</li>
        <li>Scroll or pinch to zoom in or out.</li>
        <li>Click on the name of a God to see more information about them.</li>
        <li>Enjoy!</li>
      </ul>
      <div className="button-container">
        <button className="modal-button" onClick={closeAndAudio}>
          continue With Audio
        </button>
        <button className="modal-button" onClick={closeModal}>
          continue without Audio
        </button>
      </div>
      <div className="modal-footer">
        <a
          target="_blank"
          className="modal-link"
          href="https://github.com/jackcasstlesjones"
        >
          Made by Jack Casstles-Jones
        </a>
      </div>
    </div>
  );
}
