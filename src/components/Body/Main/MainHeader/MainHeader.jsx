import React from "react"
import style from "./MainHeader.module.scss"

const MainHeader = () => (
  <>
    <div className={style.container_top}>
      <h3 className={style.title}>Oxota na ovets</h3>
    </div>
    <div className={style.links}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/OxotaNaOvets/">
        <img src="http://borysov.com.ua/sites/default/files/facebook_circle_color-128.png" alt="facebook" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oxotanaovets/?hl=uk">
        <img src="http://borysov.com.ua/sites/default/files/instagram_circle_color-128_0.png" alt="instragram" />
      </a>
    </div>
  </>
)

export default MainHeader