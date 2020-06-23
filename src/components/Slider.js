import React, { Component } from "react"
import Slider from "react-slick"

import d from "../images/DLogo.png"
import nyer from "../images/NYerLogo.png"
import refinery from "../images/refinery.png"
import nytimes from "../images/NYTimesLogo.png"
import domino from "../images/dominoLogo.png"
import glamour from "../images/glamourLogo.png"
import forbes from "../images/ForbesLogo.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={d} alt="" />
          </div>
          <div>
            <img src={nyer} alt="" />
          </div>
          <div>
            <img src={refinery} alt="" />
          </div>
          <div>
            <img src={nytimes} alt="" />
          </div>
          <div>
            <img src={domino} alt="" />
          </div>
          <div>
            <img src={glamour} alt="" />
          </div>
          <div>
            <img src={forbes} alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}
