import React from "react";
import avatarRegistrIcons from "../img/icons/free-icon-font-circle-user.png";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
function HeaderRightMenu({ setActiveUiPanel }) {
  return (
    <div className="wrap_right_panel">
      <div className="changing_the_language_on_the_site">Language</div>
      <div className="registration_header">
        <img
          src={avatarRegistrIcons}
          alt="avatar-registr-icons"></img>
      </div>
      <HeaderBurgerMenu setActiveUiPanel={setActiveUiPanel} />
    </div>
  );
}
export default HeaderRightMenu;
