import React from "react";
import Delivery from "./Delivery";
import TheEstablishment from "./TheEstablishment";
import rightArrowIcons from "../../img/icons/free-icon-font-angle-right.png";
import WithYou from "./WithYou";

function ChangeMenuLeftBloc({ mainBlocMenu, setMainBlocMenu }) {
  return (
    <>
      <div
        className={
          mainBlocMenu.changeMenuLeftBloc
            ? "wrap_change_menu_leftBloc active"
            : "wrap_change_menu_leftBloc"
        }
        onClick={() =>
          setMainBlocMenu(prevState => ({
            ...prevState,
            changeMenuLeftBloc: !prevState.changeMenuLeftBloc,
          }))
        }>
        <div className="in_the_establishment_leftBloc">
          {<TheEstablishment />}
          <img
            className={
              mainBlocMenu.changeMenuLeftBloc
                ? "rightArrowIcons_change_menu_leftBloc active"
                : "rightArrowIcons_change_menu_leftBloc"
            }
            src={rightArrowIcons}
            alt=""></img>
        </div>
        <div className="with_you_leftBloc">{<WithYou />}</div>
        <div className="delivery_leftBloc">{<Delivery />}</div>
      </div>
    </>
  );
}

export default ChangeMenuLeftBloc;
