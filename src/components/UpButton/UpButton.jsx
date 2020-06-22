import React from "react"
import btn from "../../images/iconfinder_arrow-circle-up_1608521.svg"
import style from "./UpButton.module.scss"

const UpButton = ({ onTop }) => (
  <img className={style.btn} src={btn} alt="up" onClick={onTop} />
)

export default UpButton