import React from "react"
import style from "./textWShape.module.css"

import triangle from '../images/triangle.png'

const TextWShape = () => (
  <div className={style.textWShapeContainer}>
    <div className={`${style.triangle} ${style.left}`}>
      <img src={triangle} alt="" />
    </div>
    <div className={style.center}>
      <p>
        Most cleaning products contain over 60+ toxic chemicals, but
        Supernatural is here to change that.
      </p>
      <button>Get the starter set for 35% off</button>
    </div>
    <div className={`${style.triangle} ${style.right}`}>
      <img src={triangle} alt="" />
    </div>
  </div>
)

export default TextWShape
