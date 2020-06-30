import React, { Component } from "react";
import style from "./Slider.module.scss"
import slide1 from "../../../images/oxota_gallery_item1.jpg"
import slide2 from "../../../images/oxota_gallery_item2.jpg"
import slide3 from "../../../images/oxota_gallery_item3.jpg"
import slide4 from "../../../images/oxota_gallery_item4.jpg"
import prevIcon from "../../../images/iconfinder-icon.svg"
import nextIcon from "../../../images/iconfinder_icon-ios7-arrow-forward_211688.svg"

class Slider extends Component {
  state = {
    slideIndex: 0,
    slidesArr: [
      slide1,
      slide2,
      slide3,
      slide4,
    ]
  }

  nextSlide = () => {
    const { slideIndex, slidesArr } = this.state

    if (slideIndex === slidesArr.length - 1) {
      return this.setState({ slideIndex: 0 })
    }

    this.setState(prevState => ({ slideIndex: prevState.slideIndex + 1 }))
  }

  prevSlide = () => {
    const { slideIndex, slidesArr } = this.state

    if (slideIndex === 0) {
      return this.setState({ slideIndex: slidesArr.length - 1 })
    }
    this.setState(prevState => ({ slideIndex: prevState.slideIndex - 1 }))
  }

  render() {
    const { slidesArr, slideIndex } = this.state
    return (
      <div className={style.container} id="slider">
        <div className={style.slider}>
          <div className={style.slider_item}>
            <img src={slidesArr[slideIndex]} alt="slide1" />
          </div>
        </div>
        <div className={style.btns}>
          <div className={style.btns_prev} onClick={this.prevSlide}>
            <img className={style.btns_prev_img} src={prevIcon} alt="prevIcon" />
          </div>
          <div className={style.btns_next} onClick={this.nextSlide}>
            <img className={style.btns_prev_img} src={nextIcon} alt="nextIcon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Slider