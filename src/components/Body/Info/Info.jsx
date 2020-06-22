import React, { Component } from 'react';
import BigLogo from "../../../images/oxota-logo-big.png"
import style from "./Info.module.scss"
import MainPhoto from "./MainPhoto/MainPhoto"

class Info extends Component {
  render() {
    return (
      <>
        <div className={style.logo_wrapper}>
          <img src={BigLogo} alt="BigLogo" />
        </div>
        <div className={style.title}>АЗІАТСЬКИЙ СТЕЙК-ХАУС</div>
        <MainPhoto />
        <div className={style.info_det}>
          <div className={style.info_det_part}>
            <p>М. Київ, вул. Воздвиженська 10 Б</p>
            <div className={style.map_link}>
              <a href="#header">На мапі</a>
            </div>
          </div>
          <div className={style.info_det_part}>
            <p>+38 067 406 41 56</p>
            <a href="mailto: manager@oxota.com.ua">manager@oxota.com.ua</a>
          </div>
          <div className={style.info_det_part}>
            <p>З 10:00 до 22:00</p>
          </div>
        </div>
      </>
    )
  }
}

export default Info