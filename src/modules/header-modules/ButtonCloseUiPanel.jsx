import React from "react";
import iconsClose from "../img/icons/free-icon-font-circle-xmark.png";
function ButtonCloseUiPanel({ activeUiPanel, setActiveUiPanel }) {
  return (
    <div
      className={
        activeUiPanel ? "button_close_uiPanel active" : "button_close_uiPanel"
      }
      onClick={() => setActiveUiPanel(false)}>
      <img
        src={iconsClose}
        alt="icons-krest-clos-window"
      />
    </div>
  );
}
export default ButtonCloseUiPanel;
