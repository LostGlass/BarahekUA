import React from "react";
function Header({ headerLogo }) {
  return (
    <b>
      <div className="content_header">
        <a href="http://localhost:3000/">
          <div className="header_logo">
            <img
              src={headerLogo}
              alt="ikons-logo-barahek"></img>
            <div className="all_text_header_logo">
              <div className="restaurant_name_header">
                Тот самый Барашек Харьков
              </div>

              <div className="text_under_the_name_of_the_restaurant">
                Вкусный и гордый грузинский ретсоран! ua -
                <div className="restaurant_city_change_text">
                  <p>Изменить заведение</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </b>
  );
}

export default Header;
