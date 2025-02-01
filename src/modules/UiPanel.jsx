import React from "react";
import avatarRegistrIcons from "../img/icons/free-icon-font-circle-user.png";
import rightArrowIcons from "../img/icons/free-icon-font-angle-right.png";
import changeOfRestaurantIcon from "../img/icons/free-icon-font-restaurant-6349766 (1).png";
import googleCoordinatesIcon from "../img/icons/free-icon-font-map-marker-5074102.png";
import phoneNumberIcon from "../img/icons/free-icon-font-phone-call-5068731.png";
import invitationToTheSiteIcon from "../img/icons/free-icon-font-earth-americas-9585979.png";
import linkIcon from "../img/icons/free-icon-font-circle-nodes.png";
import telegramIcon from "../img/icons/free-icon-font-telegram-6422206.png";
import instagramIcon from "../img/icons/free-icon-font-instagram-6422200.png";
import facebookIcon from "../img/icons/free-icon-font-facebook-6422199.png";
import tikTokIcon from "../img/icons/free-icon-font-tik-tok-6422207.png";
import tripAdvisorIcon from "../img/icons/free-icon-font-tripadvisor-6424104.png";
import googleMapsIcon from "../img/icons/free-icon-font-google-6424087.png";
import allergensIcon from "../img/icons/free-icon-font-wheat-awn-circle-exclamation-12948508.png";
import usefulIfoIcon from "../img/icons/free-icon-font-guide-alt-15399218.png";
import termsofUseIcon from "../img/icons/free-icon-font-interrogation-3916709.png";
function UiPanel({
  setActiveListOfAllergensUiPanel,
  setActiveTermsOfUseUiPanel,
  setActiveUsefulInfo,
}) {
  return (
    <div className="varp_content_uiPanel">
      <a href="##">
        <div className="registration_uiPanel_vrap">
          <div className="registration_uiPanel_content">
            <div className="registration_uiPanel_vrap_icon">
              <img
                src={avatarRegistrIcons}
                alt="avatar-icon-registr-icons"></img>
            </div>
            <p>Авторизируйтесь</p>
          </div>
          <div>
            <img
              className="arrow_icon"
              src={rightArrowIcons}
              alt="icon-of-an-arrow-pointing-to-theRight"></img>
          </div>
        </div>
      </a>
      <div className="validation_memo_uiPanel">
        <p>
          <span>Авторизируйтесь </span>
          что бы упростить заказ и пользоваться дополнительными функциями.
        </p>
      </div>
      <div className="change_of_restaurant_uiPanel_vrap">
        <a href="##">
          <div className="change_of_restaurant_uiPanel_content">
            <div className="change_of_restaurant_uiPanel_vrap_icon">
              <img
                src={changeOfRestaurantIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Изменить заведение</p>
          </div>
        </a>
        <div>
          <img
            className="change_of_restaurant_icon"
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="contact_uiPanel">
        <p>Контакты</p>
      </div>
      <div className="vrap_google_coordinates_contact-block_uiPanel rotate_icons">
        <a href="##">
          <div className="content_google_coordinates_contact-block_uiPanel">
            <div className="vrap_icon_google_coordinates_contact-block_uiPanel ">
              <img
                src={googleCoordinatesIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>улица Сумская, 35а, Харьков, Харьковская область, Украина</p>
          </div>
        </a>
        <div>
          <img
            className="google_coordinates_contact-block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_phone_number_contact-block_uiPanel">
        <a href="##">
          <div className="content_phone_number_contact-block_uiPanel">
            <div className="vrap_icon_phone_number_contact-block_uiPanel">
              <img
                src={phoneNumberIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>+380503525202</p>
          </div>
        </a>
        <div>
          <img
            className="phone_number_contact-block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_invitation_to_the_site_contact-block_uiPanel">
        <a href="##">
          <div className="content_invitation_to_the_site_contact-block_uiPanel">
            <div className="vrap_icon_invitation_to_the_site_contact-block_uiPanel">
              <img
                src={invitationToTheSiteIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Посетите наш веб-сайт</p>
          </div>
        </a>
        <div>
          <img
            className="phone_invitation_to_the_site-block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="social_media_uiPanel">
        <p>Мы в соц сетях</p>
      </div>
      <div className="vrap_social_media_block_uiPanel ">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={facebookIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Facebook</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_social_media_block_uiPanel">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={tripAdvisorIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>TripAdvisor</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_social_media_block_uiPanel">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={instagramIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Instagram</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_social_media_block_uiPanel">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={telegramIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Telegram</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_social_media_block_uiPanel">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={googleMapsIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Google</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="vrap_social_media_block_uiPanel">
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={tikTokIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>TikTok</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon rotate_icons"
            src={linkIcon}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div className="useful_information_uiPanel">
        <p>Полезная информация</p>
      </div>
      <div
        className="vrap_social_media_block_uiPanel"
        onClick={() => setActiveListOfAllergensUiPanel(true)}>
        <div className="content_social_media_block_uiPanel">
          <div className="vrap_icon_social_media_block_uiPanel">
            <img
              src={allergensIcon}
              alt="icon-change_of_restaurant-icons"></img>
          </div>
          <p>Список аллергенов</p>
        </div>

        <div>
          <img
            className="social_media_block_uiPanel_icon social_media_uiPanel_icon_arrow"
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div
        className="vrap_social_media_block_uiPanel"
        onClick={() => {
          setActiveTermsOfUseUiPanel(true);
        }}>
        <div className="content_social_media_block_uiPanel">
          <div className="vrap_icon_social_media_block_uiPanel">
            <img
              src={termsofUseIcon}
              alt="icon-change_of_restaurant-icons"></img>
          </div>
          <p>Условия использования</p>
        </div>
        <div>
          <img
            className="social_media_block_uiPanel_icon social_media_uiPanel_icon_arrow "
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div
        className="vrap_social_media_block_uiPanel"
        onClick={() =>
          setActiveUsefulInfo(prevState => ({
            ...prevState,
            privacyPolicy: !prevState.privacyPolicy,
          }))
        }>
        <div className="content_social_media_block_uiPanel">
          <div className="vrap_icon_social_media_block_uiPanel">
            <img
              src={usefulIfoIcon}
              alt="icon-change_of_restaurant-icons"></img>
          </div>
          <p>Политика конфидециальности</p>
        </div>
        <div>
          <img
            className="social_media_block_uiPanel_icon  social_media_uiPanel_icon_arrow"
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div
        className="vrap_social_media_block_uiPanel"
        onClick={() =>
          setActiveUsefulInfo(prevState => ({
            ...prevState,
            informationAboutTheCompany: !prevState.informationAboutTheCompany,
          }))
        }>
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={usefulIfoIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Информация про компанию</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon social_media_uiPanel_icon_arrow "
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
      <div
        className="vrap_social_media_block_uiPanel"
        onClick={() =>
          setActiveUsefulInfo(prevState => ({
            ...prevState,
            cookiePolicy: !prevState.cookiePolicy,
          }))
        }>
        <a href="##">
          <div className="content_social_media_block_uiPanel">
            <div className="vrap_icon_social_media_block_uiPanel">
              <img
                src={usefulIfoIcon}
                alt="icon-change_of_restaurant-icons"></img>
            </div>
            <p>Политика использования файлов cookie</p>
          </div>
        </a>
        <div>
          <img
            className="social_media_block_uiPanel_icon social_media_uiPanel_icon_arrow"
            src={rightArrowIcons}
            alt="icon-of-an-arrow-pointing-to-theRight"></img>
        </div>
      </div>
    </div>
  );
}
export default UiPanel;
