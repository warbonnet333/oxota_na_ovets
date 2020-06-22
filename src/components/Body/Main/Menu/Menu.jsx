import React from "react"
import style from "./Menu.module.scss"

const Menu = () => (
  <div id="menu" className={style.container}>
    <h3 className={style.title}>Меню</h3>
    <ul className={style.menu_list}>
      <li className={style.menu_list_item}>
        <a href="https://borysov.com.ua/sites/default/files/restaurant-menu/oxota_menu_food_ukreng_21-05_0.pdf">ЇЖА</a>
      </li>
      <li className={style.menu_list_item}>
        <a href="https://borysov.com.ua/sites/default/files/restaurant-menu/oxota_menu_drinks_ukreng_1909_0.pdf">НАПОЇ</a>
      </li>
    </ul>
  </div >
)

export default Menu