import React from "react"
import style from "./MainBody.module.scss"
import collage from "../../../../images/collage.jpg"

const MainBody = () => (
  <>
    <div className={style.news}>
      <p>Літня тераса Oxota na Ovets на Воздвиженці вже працює! Як завжди, готуємо ідеальні стейки та всі азіатські хіти:  качку по-пекунськи, том ям, роли, карі, моті та ще безліч цікавого. І, звісно, фірмовий тірамісу.</p>
      <br />
      <br />
      <p>Приймаємо бронювання за номером: (067) 406 41 56</p>
      <p className={style.news_links}>Або пишить нам в <a href="https://www.facebook.com/OxotaNaOvets/">Facebook</a> або <a href="https://www.instagram.com/oxotanaovets/?hl=uk">Instagram</a></p>
      <p className={style.news_pdfs}>Переглянути меню ресторану: <a href="https://borysov.com.ua/sites/default/files/restaurant-menu/oxota_menu_food_ukreng_21-05_0.pdf">ЇЖА</a> та <a href="https://borysov.com.ua/sites/default/files/restaurant-menu/oxota_menu_drinks_ukreng_1909_0.pdf">НАПОЇ</a></p>
      <p>І ще суперновина. Тепер у нас є доставка по Києву.</p>
      <p className={style.news_links}>
        <a href="https://1ed.com.ua/kyiv/oxota-na-ovets">Переглянути меню та замовити</a>
      </p>
    </div>
    <div className={style.collage_wrapper}>
      <img className={style.collage_wrapper_img} src={collage} alt="collage" />
    </div>
  </>
)

export default MainBody