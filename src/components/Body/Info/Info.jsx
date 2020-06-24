import React, { Component } from 'react';
import BigLogo from "../../../images/oxota-logo-big.png"
import style from "./Info.module.scss"
import MainPhoto from "./MainPhoto/MainPhoto"

class Info extends Component {
  render() {
    return (
      <>
        <div className={style.logo_wrapper} id="big_logo">
          <img src={BigLogo} alt="BigLogo" />
        </div>
        <div className={style.title}>АЗІАТСЬКИЙ СТЕЙК-ХАУС</div>
        <MainPhoto />
        <div className={style.info_det}>
          <div className={style.info_det_part}>
            <p>М. Київ, вул. Воздвиженська 10 Б</p>
            <div className={style.map_link}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com.ua/maps/place/Oxota+Na+Ovets/@50.4612327,30.5068398,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce69a3104cbb:0x12510ff0aeff81eb!8m2!3d50.4612293!4d30.5090285?hl=ru">На мапі</a>
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