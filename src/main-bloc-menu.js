import React, { useState } from "react";
import "./style/css/main-bloc-menu.css";
import WrapMainBloc from "./modules/main-bloc-content/WrapMainBloc";

function MainBlocMenuRender() {
  const [mainBlocMenu, setMainBlocMenu] = useState({
    changeMenuLeftBloc: false,
  });
  return (
    <div className="wrapp_main_bloc_menu">
      <div className="main_menu_logo"></div>
      <WrapMainBloc
        mainBlocMenu={mainBlocMenu}
        setMainBlocMenu={setMainBlocMenu}
      />
    </div>
  );
}

export default MainBlocMenuRender;
