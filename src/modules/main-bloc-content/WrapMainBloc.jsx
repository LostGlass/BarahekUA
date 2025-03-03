import React, { useState } from "react";
import Delivery from "./Delivery";
import TheEstablishment from "./TheEstablishment";
import WithYou from "./WithYou";
import rightArrowIcons from "../../img/icons/free-icon-font-angle-right.png";

function WrapMainBloc({ mainBlocMenu, setMainBlocMenu }) {
  const [activeChangeMenuLeftBloc, setActiveChangeMenuLeftBloc] = useState({
    theEstablishment: false,
    withYou: false,
    delivery: false,
  });

  return (
    <div className="wrap_main_bloc_conten">
      <div className="left_blok_wrap">
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
            {activeChangeMenuLeftBloc.withYou ? (
              <Delivery />
            ) : (
              (((<WithYou />),
              activeChangeMenuLeftBloc.delivery ? <WithYou /> : <Delivery />),
              activeChangeMenuLeftBloc.theEstablishment ? (
                <WithYou />
              ) : (
                <TheEstablishment />
              ))
            )}
            <img
              className={
                mainBlocMenu.changeMenuLeftBloc
                  ? "rightArrowIcons_change_menu_leftBloc active"
                  : "rightArrowIcons_change_menu_leftBloc"
              }
              src={rightArrowIcons}
              alt=""></img>
          </div>
          <div
            className="with_you_leftBloc"
            onClick={() =>
              setActiveChangeMenuLeftBloc(prevState => ({
                ...prevState,
                theEstablishment: !prevState.theEstablishment,
              }))
            }>
            {activeChangeMenuLeftBloc.withYou ? (
              <WithYou />
            ) : (
              (((<WithYou />),
              activeChangeMenuLeftBloc.delivery ? <WithYou /> : <WithYou />),
              activeChangeMenuLeftBloc.theEstablishment ? (
                <TheEstablishment />
              ) : (
                <WithYou />
              ))
            )}
          </div>
          <div
            className="delivery_leftBloc"
            onClick={() =>
              setActiveChangeMenuLeftBloc(prevState => ({
                ...prevState,
                withYou: !prevState.withYou,
              }))
            }>
            {activeChangeMenuLeftBloc.delivery ? (
              <Delivery />
            ) : (
              (((<Delivery />),
              activeChangeMenuLeftBloc.theEstablishment ? (
                <Delivery />
              ) : (
                <Delivery />
              )),
              activeChangeMenuLeftBloc.withYou ? (
                <TheEstablishment />
              ) : (
                <Delivery />
              ))
            )}
          </div>
        </div>
        <div>asdasd</div>
      </div>
      <div className="center_blok_wrap">CENTER</div>
      <div className="rigth_blok_wrap">
        <div className="search_by_menu_rigth_blok">
          <div className="search_bloc">Поиск</div>
        </div>
      </div>
    </div>
  );
}
export default WrapMainBloc;
