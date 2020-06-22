import React from "react"
import style from './Main.module.scss'
import MainHeader from "./MainHeader/MainHeader"
import MainBody from "./MainBody/MainBody"
import Menu from "./Menu/Menu"

const Main = () => (
  <div className={style.container}>
    <MainHeader />
    <MainBody />
    <Menu />
  </div>
)

export default Main