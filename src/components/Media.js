import React from "react"
import style from "./media.module.css"

import d from '../images/DLogo.png'
import nyer from '../images/NYerLogo.png'
import refinery from '../images/refinery.png'
import nytimes from '../images/NYTimesLogo.png'
import domino from '../images/dominoLogo.png'
import glamour from '../images/glamourLogo.png'
import forbes from '../images/ForbesLogo.png'


const Media = () => (
  <div className={style.desktop}>
      <div className={style.mediaContainer}>
        <p>Also seen in</p>
        <div className={style.firstLine}>
          <img src={d} alt="" />
          <img src={nyer} alt="" />
          <img src={refinery} alt="" />
        </div>
        <div className={style.secondLine}>
          <img src={nytimes} alt="" />
        </div>
        <div className={style.thridLine}>
          <img src={domino} alt="" />
          <img src={glamour} alt="" />
          <img src={forbes} alt="" />
        </div>
      </div>
  </div>
)

export default Media
