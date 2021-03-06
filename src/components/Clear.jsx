import React from "react";
import styles from "./Clear.module.css";

function Clear({ clearDrawing }) {
  return (
    <div className={styles.tool}>
      <i
        className={`${styles.fas} fas fa-undo-alt`}
        id="clear-canvas"
        title="Clear"
        onClick={clearDrawing}
      ></i>
    </div>
  );
}

export default Clear;
