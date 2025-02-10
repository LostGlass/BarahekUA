import React from "react";
import burgerMenuIcons from "../img/icons/free-icon-font-menu-burger-3917291.png";
function HeaderBurgerMenu({ setActiveUiPanel }) {
  return (
    <div
      className="header_burger_menu"
      onClick={() => setActiveUiPanel(true)}>
      <img
        src={burgerMenuIcons}
        alt="icons-drop-dawn-header"></img>
    </div>
  );
}

export default HeaderBurgerMenu;
