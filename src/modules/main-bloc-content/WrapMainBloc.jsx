import React, { useEffect, useState } from "react";
import ChangeMenuLeftBloc from "./ChangeMenuLeftBloc";
import RestaurantInformation from "./RestaurantInformation";
import searchIcons from "../../img/icons/free-icon-font-search.png";
import reservedIcons from "../../img/icons/free-icon-font-bahai.png";
import leaveFeedbackIcons from "../../img/icons/free-icon-font-feedback-alt.png";

function WrapMainBloc({ mainBlocMenu, setMainBlocMenu }) {
  const [workingHours, setWorkingHours] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [workScheduleSwitch, setWorkScheduleSwitch] = useState();

  useEffect(() => {
    const date = new Date();
    setWorkScheduleSwitch(date.getDay());
  }, []);

  const handlerChange = event => {
    setValueInput(event.target.value);
  };

  return (
    <div className="wrap_main_bloc_conten">
      <div className="left_blok_wrap">
        <ChangeMenuLeftBloc
          mainBlocMenu={mainBlocMenu}
          setMainBlocMenu={setMainBlocMenu}
        />
        <div>dfdhf</div>
      </div>
      <div className="center_blok_wrap">CENTER</div>

      <div className="rigth_blok_wrap">
        <div className="search_by_menu_rigth_blok">
          <div className="search_bloc">
            <input
              value={valueInput}
              onChange={handlerChange}
              placeholder="Поиск"
              maxLength={20}
              type="text"></input>
          </div>
          <img
            src={searchIcons}
            alt=""></img>
        </div>
        <div
          className={
            valueInput.length >= 2 || valueInput.length <= 0
              ? "symbol_warning_rigth_blok"
              : "symbol_warning_rigth_blok active"
          }>
          Введите хотя бы два символа.
        </div>
        <p className="information_timeVork_rigth_blok">
          Информация о заведении
        </p>
        <RestaurantInformation
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          workScheduleSwitch={workScheduleSwitch}
        />
        <div className="table_reservation_rigth_bloc">
          <div className="icons_table_reservation">
            <img
              src={reservedIcons}
              alt=""></img>
          </div>
          <div className="table_reservation_txt">Бронирование</div>
        </div>
        <div className="leave_feedback_rigth_bloc">
          <div className="icons_leave_feedback">
            <img
              src={leaveFeedbackIcons}
              alt=""></img>
          </div>
          <div className="leave_feedback_txt">Оставить отзыв</div>
        </div>
      </div>
    </div>
  );
}
export default WrapMainBloc;
