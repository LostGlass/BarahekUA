import React from "react";
import rightArrowIcons from "../img/icons/free-icon-font-angle-right.png";

function ListAllergensUiPanel({
  activeListOfAllergens,
  setActiveListOfAllergensUiPanel,
}) {
  return (
    <div
      className={
        activeListOfAllergens ? "list_allergens active" : "list_allergens"
      }>
      <div className="vrap_menu_allergens">
        <div
          className="vrap_button_closeMenu_allergens"
          onClick={() => setActiveListOfAllergensUiPanel(false)}>
          <div className="button_closeMenu_allergens">
            <img
              className="arrow_icon_button_closeMenu_allergens"
              src={rightArrowIcons}
              alt="right-arrow-icons"></img>
          </div>
          <p>Назад</p>
        </div>
        <div className="list_allergens_content">
          <ul>
            <li>1. Крупы ,которые содержат глютен</li>
            <li>1a. Пшеница</li>
            <li>1b. Зерно</li>
            <li>1c. Ячмень</li>
            <li>1d. Овес</li>
            <li>1e. Спельта</li>
            <li>1f. Камут</li>
            <li>2. Ракоподобные</li>
            <li>3. Яйца</li>
            <li>4. Рыба</li>
            <li>5. Арахис</li>
            <li>6. Соя</li>
            <li>7. Молоко</li>
            <li>8. Орехи</li>
            <li>8a. Мендаль</li>
            <li>8b. Лесовые орехи</li>
            <li>8c. Волошьские орехи</li>
            <li>8d. Кешью</li>
            <li>8e. Пекан</li>
            <li>8f. Бразильские орехи</li>
            <li>8g. Фисташки</li>
            <li>8h. Макадамия</li>
            <li>9. Сельдерей</li>
            <li>10. Горчица</li>
            <li>11. Кунжут</li>
            <li>12. Двуокись серы и сульфаты</li>
            <li>13. Люпин</li>
            <li>14. Малюски</li>
            <li>15. Мед</li>
            <li>16. Цитрусовые</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ListAllergensUiPanel;
