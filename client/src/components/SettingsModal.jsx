import React from "react";
import { useTheme } from "../utils/themeContext.jsx";

function SettingsModal({ onClose }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Settings</h2>
        <label style={styles.switch}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "300px",
    textAlign: "center",
  },
  switch: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  },
  closeButton: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#6366f1",
    color: "#fff",
    cursor: "pointer",
  },
};

export default SettingsModal;