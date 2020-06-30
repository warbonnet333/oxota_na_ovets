import React from 'react';
import logo from "../../images/logo.png"
import style from "./Header.module.scss"
import burger from "../../images/burger.png"

const Header = ({ openSideBar }) =>
  <div className={style.header} id="top">
    <a href="https://borysov.com.ua/uk">
      <img className={style.header_logo_img} src={logo} alt="logo" />
    </a>
    <div className={style.header_burger_wrapper} onClick={(event) => openSideBar(event)}>
      <img src={burger} alt="sideBar" />
    </div>
  </div >


export default Header