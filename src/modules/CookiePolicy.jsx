import React from "react";
import rightArrowIcons from "../img/icons/free-icon-font-angle-right.png";

function CookiePolicy({ activeUsefulInfo, setActiveUsefulInfo }) {
  return (
    <div
      className={
        activeUsefulInfo.cookiePolicy
          ? "vrap_terms_of_use_UiPanel active "
          : "vrap_terms_of_use_UiPanel"
      }>
      <div
        className={
          activeUsefulInfo.cookiePolicy
            ? "vrap_header_terms_of_use_UiPanel active"
            : "vrap_header_terms_of_use_UiPanel"
        }>
        <div className="header_terms_of_use_UiPanel">
          <div
            className="icon_header_terms_of_use_UiPanel"
            onClick={() =>
              setActiveUsefulInfo(prevState => ({
                ...prevState,
                cookiePolicy: !prevState.cookiePolicy,
              }))
            }>
            <img
              src={rightArrowIcons}
              alt="right-arrow-icons"></img>
          </div>
          Политика использования файлов cookie
        </div>
      </div>
      <div
        className={
          activeUsefulInfo.cookiePolicy
            ? "terms_of_use_UiPanel active"
            : "terms_of_use_UiPanel "
        }>
        Як ми використовуємо Cookie Cookie — це невеликий текстовий файл, який
        сайт зберігає на вашому комп'ютері або мобільному пристрої, коли ви
        відвідуєте сайт. Браузери підтримують файли cookie та аналогічні
        технології (як-от локальне зберігання та пікселі), щоб сайти, подібні до
        нашого, могли запам'ятовувати інформацію про ваше відвідування та
        використовувати її для поліпшення вашого досвіду створення сукупної
        анонімної статистики про використання сайту. У цій умові ми
        використовуємо термін 'кукі' для позначення як кукі, так аналогічних
        технологій. Cookies можуть бути встановлені сайтом, який ви відвідуєте
        (так звані 'cookies першої сторони'), або іншою стороною, наприклад,
        тими, хто надає аналітичні або рекламні послуги або інтерактивний
        контент на сайті ('cookies третьої сторони'). Наші основні файли cookie
        включають строго необхідні файли cookie, функціональні файли cookie,
        аналітичні файли cookie та рекламні файли cookie. Необхідні файли
        Cookie: Ці файли cookie необхідні для функціонування сайту не можуть
        бути відключені в наших системах. Ви можете налаштувати свій браузер на
        блокування або попередження про ці файли cookie, але це призведе до
        того, що деякі частини сайту не працюватимуть. До них належать: ІМ'Я
        ОПИС EXPIRES lang Цей файл cookie запам'ятовує яка у користувача поточна
        мова 30 днів mguid Цей файл cookie призначений для визначення сесії
        клієнта 20 днів language Цей файл cookie запам'ятовує яка у користувача
        поточна мова 1 рік autoLang Цей файл cookie призначений для того, що б
        визначати, чи є поточна мова оригіналом 1 рік cookieSettings Цей файл
        cookie призначений для того, щоб ми запам'ятовували вибір користувача
        які куки залишати 1 рік Google Maps Google Maps API - це картографічна
        служба, яку надає компанія Google Inc., 1600 Amphitheater Parkway,
        Mountain View, CA 94043, США. Нам потрібно використовувати Google Maps
        API, щоб ви могли вказати місце доставки вашого замовлення на карті. При
        використанні Google Maps інформація про використання вами цього
        веб-сайту (включаючи ваш IP-адресу) може передаватися на сервер Google в
        США та зберігатися там. Нижче подані посилання надають інформацію про
        захист даних та Умови використання Google Maps. Як я можу контролювати
        файли cookie як використовуються мої дані? Існує кілька способів, за
        допомогою яких ви можете контролювати, яка інформація збирається файлами
        cookie на нашому сайті як ця інформація використовується. Налаштування
        вашого браузера У вашому браузері є елементи керування, які дають змогу
        вам керувати використанням файлів cookie на відвідуваних вами сайтах.
        Більшість браузерів мають функції, що дають змогу переглядати та
        видаляти файли cookie, що зберігаються на вашому пристрої, а також
        блокувати файли cookie на всіх або обраних сайтах. Для отримання
        додаткової інформації тут наведено посилання на зовнішні довідкові
        матеріали для деяких популярних браузерів: Mozilla Firefox Apple Safari
        Google Chrome Microsoft Edge Налаштування вашого мобільного пристрою Ваш
        мобільний пристрій також може мати налаштування браузера, що дають змогу
        контролювати використання файлів cookie, особливо якщо пристрій
        підтримує встановлення додатків, як, наприклад, пристрої iOS Android.
        Пристрої OS Android також включають додаткові налаштування пристрою, які
        контролюють, чи можуть рекламні партнери використовувати інформацію про
        вашу активність у додатку в рекламних цілях. На пристроях iOS ви можете
        знайти налаштування під назвою 'Обмежити відстеження реклами'. На
        пристроях Android ви можете знайти налаштування під назвою 'Відмовитися
        від персоналізації реклами'. Керування файлами cookie Також можна
        повністю заборонити прийняття браузером файлів cookie, змінивши
        налаштування файлів cookie в браузері. Зазвичай ці налаштування можна
        знайти в меню 'Параметри' або 'Налаштування' вашого браузера. Зверніть
        увагу, що видалення наших файлів cookie або вимкнення майбутніх файлів
        cookie або технологій відстеження може позбавити вас доступу до певних
        розділів або функцій наших Послуг або іншим чином негативно позначитися
        на вашому досвіді. Ми можемо оновлювати цю Політику використання файлів
        cookie. Ми рекомендуємо вам періодично переглядати цю сторінку для
        отримання останньої інформації про файли cookie.
      </div>
    </div>
  );
}

export default CookiePolicy;
