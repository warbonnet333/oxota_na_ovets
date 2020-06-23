import React from "react"
import style from "./Footer.module.scss";
import logo from "../../images/logo.png";

const Footer = () => (
  <footer className={style.footer}>
    <a href="https://borysov.com.ua/uk">
      <img className={style.footer_logo_img} src={logo} alt="logo" />
    </a>
    <p className={style.footer_descr}>Створено виключно в навчальних цілях</p>
    <a className={style.footer_link} href="mailto: warbonnet333@gmail.com">warbonnet333@gmail.com</a>
    <br />
    <p className={style.footer_year}>© 2020</p>
  </footer>
)

export default Footer