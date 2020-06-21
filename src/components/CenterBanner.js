import React from "react"
import style from "./centerBanner.module.css"

import text from '../images/middleTextDesktop.png'
import logo from '../images/middleLogoDesktop.png'
import line from '../images/gradientLine.png'

const CenterBanner = () => (
  <div className={style.desktop}>
    <div className={style.desktopContent}>
      <p>
        “Super-effective, chemical-free cleaning products you can feel good
        about using.”
      </p>
      <img src={logo} alt="" />
    </div>
  </div>
)

export default CenterBanner
