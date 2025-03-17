import React from "react";
import triangleIcons from "../../img/icons/free-icon-font-caret-down.png";
import phoneleIcons from "../../img/icons/free-icon-font-mobile-notch-8034760.png";
import geoLocationleIcons from "../../img/icons/free-icon-font-marker-3916882.png";
import watchIcons from "../../img/icons/free-icon-font-time-forward-3914197.png";
function RestaurantInformation({
  workingHours,
  setWorkingHours,
  workScheduleSwitch,
}) {
  return (
    <>
      {" "}
      <div className="wrap_restaurant_info_right_block">
        <div
          className="working_hours_right_bloc hover_information_timeVork_rigth_blok"
          onClick={() => {
            setWorkingHours(!workingHours);
          }}>
          <div className="icons_restaurant_info_right_block">
            <img
              src={watchIcons}
              alt=""></img>
          </div>
          <div>
            <p className="working_hours_txt">Рабочее время:</p>
            <div className="time">
              <div> 11:30 - 22:00</div>
              <img
                className={
                  workingHours
                    ? "triangleIcons_right_block active"
                    : "triangleIcons_right_block"
                }
                src={triangleIcons}
                alt=""></img>
            </div>
          </div>
        </div>
        <div className="address_right_block hover_information_timeVork_rigth_blok">
          <div className="icons_restaurant_info_right_block">
            <img
              src={geoLocationleIcons}
              alt=""></img>
          </div>
          <p>улица Сумская ,35а,Харьков,Харьковская область,Украина</p>
        </div>
        <div className="phone_number_right_block hover_information_timeVork_rigth_blok">
          <div className="icons_restaurant_info_right_block">
            <img
              src={phoneleIcons}
              alt=""></img>
          </div>
          <div>
            <p className="phone_number_txt">Телефон:</p>
            <p className="phone_number">+380680656135</p>
          </div>
        </div>
        <div
          className={
            workingHours ? "drop_window_time active" : "drop_window_time"
          }>
          <div className={workScheduleSwitch === 1 ? "day_work" : "monday"}>
            Понедельник {<p>11:30 - 22:00</p>}
          </div>
          <div className={workScheduleSwitch === 2 ? "day_work" : "tuesday"}>
            Вторник <p>11:30 - 22:00</p>
          </div>
          <div className={workScheduleSwitch === 3 ? "day_work" : "wednesday"}>
            Среда <p>11:30 - 22:00</p>
          </div>
          <div
            className={
              workScheduleSwitch === 4 ? "thursday active" : "thursday"
            }>
            Четверг <p>11:30 - 22:00</p>
          </div>
          <div className={workScheduleSwitch === 5 ? "day_work" : "friday"}>
            Пятница <p>11:30 - 22:00</p>
          </div>
          <div className={workScheduleSwitch === 6 ? "day_work" : "saturday"}>
            Суббота {<p>11:30 - 22:00</p>}
          </div>
          <div className={workScheduleSwitch === 0 ? "day_work" : "sunday"}>
            Воскресенье <p>11:30 - 22:00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantInformation;
