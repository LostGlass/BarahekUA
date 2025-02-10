import React from "react";
import rightArrowIcons from "../img/icons/free-icon-font-angle-right.png";

function InformationAboutTheCompany({ activeUsefulInfo, setActiveUsefulInfo }) {
  return (
    <div
      className={
        activeUsefulInfo.informationAboutTheCompany
          ? "vrap_terms_of_use_UiPanel active "
          : "vrap_terms_of_use_UiPanel"
      }>
      <div
        className={
          activeUsefulInfo.informationAboutTheCompany
            ? "vrap_header_terms_of_use_UiPanel active"
            : "vrap_header_terms_of_use_UiPanel"
        }>
        <div className="header_terms_of_use_UiPanel">
          <div
            className="icon_header_terms_of_use_UiPanel"
            onClick={() =>
              setActiveUsefulInfo(prevState => ({
                ...prevState,
                informationAboutTheCompany:
                  !prevState.informationAboutTheCompany,
              }))
            }>
            <img
              src={rightArrowIcons}
              alt="right-arrow-icons"></img>
          </div>
          Информация про компанию
        </div>
      </div>
      <div
        className={
          activeUsefulInfo.informationAboutTheCompany
            ? "terms_of_use_UiPanel active"
            : "terms_of_use_UiPanel "
        }>
        Контакти "Той самий ****** Харків" Ел. пошта:
        baras***harkovbuh@gmail.com Телефон: 38098816*** Реквізити: ФОП *****
        Ел*** Іль**** ІПН / ЄДРПОУ: 348541*** Юридична адреса: kraine, 61046,
        *********************************, house 14 Контакти "***********" Ел.
        пошта: anastasial*****tseva7654@gmail.com Телефон: +380***** Реквізити:
        ТОВ Барашек ІПН / ЄДРПОУ: 43156**** Юридична адреса: Способи оплати
        Банківською карткою Для вибору оплати товару за допомогою банківської
        картки на відповідній сторінці необхідно натиснути кнопку «Оплата
        замовлення банківською карткою». Оплата відбувається через систему
        liqpay з використанням Банківських карток наступних платіжних систем:
        VisaVisa MastercardMastercard Опис процесу передачі даних Для оплати
        (введення реквізитів Вашої картки) Ви будете перенаправлені на платіжний
        шлюз системи liqpay.. З'єднання з платіжним шлюзом передача інформації
        здійснюється в захищеному режимі з використанням протоколу шифрування
        SSL. У разі якщо Ваш банк підтримує технологію безпечного проведення
        інтернет-платежів Verified By Visa або MasterCard SecureCode для
        проведення платежу також може знадобитися введення спеціального пароля.
        Справжній сайт підтримує 256-бітове шифрування. Конфіденційність
        повідомленої персональної інформації забезпечується системою liqpay.
        Введена інформація не буде надана третім особам за винятком випадків,
        передбачених законодавством України. Проведення платежів за банківськими
        картками здійснюється в суворій відповідності з вимогами платіжних
        систем Visa Int. и MasterCard Europe Sprl. Повернення переказаних коштів
        проводиться на Ваш банківський рахунок протягом 5 - 30 робочих днів
        (термін залежить від Банку, який видав Вашу банківську карту).
        Повернення товару Відмова від товару можлива в момент отримання при
        умові неналежної якості його. Повернення переказаних коштів проводиться
        на Ваш банківський рахунок протягом 5 - 30 робочих днів (термін залежить
        від Банку, який видав Вашу банківську карту).
      </div>
    </div>
  );
}

export default InformationAboutTheCompany;
