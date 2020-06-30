import React from "react"
import style from "./SideBar.module.scss"
import closeImg from "../../images/close.png"

const SideBar = ({ closeSideBar, }) => (
  <div className={style.sideBar} >
    <ul className={style.sideBar_list} onClick={(e) => closeSideBar(e)}>
      <li className={style.sideBar_list_item}><a href="#details">про ресторан</a></li>
      <li className={style.sideBar_list_item}><a href="#menu">меню</a></li>
      <li className={style.sideBar_list_item}><a href="#slider">фото</a></li>
    </ul>
    <img className={style.sideBar_closeImg} src={closeImg} alt="close" onClick={(e) => closeSideBar(e)} />
  </div>
)

export default SideBar