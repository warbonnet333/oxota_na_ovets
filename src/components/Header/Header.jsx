import React, { Component } from 'react';
import logo from "../../images/logo.png"
import style from "./Header.module.scss"

class Header extends Component {
  render() {
    return (
      <div className={style.header} id="header">
        <a className={style.header_logo_link} href="https://borysov.com.ua/uk">
          <img className={style.header_logo_img} src={logo} alt="logo" />
        </a>
      </div>
    )
  }
}

export default Header