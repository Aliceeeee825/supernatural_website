import React from "react"
import style from "./threeColumn.module.css"

import leaf from '../images/leaf.png'
import whiteButton from '../images/whiteButton.png'

const ThreeColumn = () => (
  <div className={style.threeColumnContainer}>
    <div className={style.threeColumn}>
      <div className={style.left}>
        <h5>
          Try Supernatural for <span className="bold">35% off</span> today
        </h5>
        <button>
          <a href="#sellingCard"><img src={whiteButton} alt="" /></a>
        </button>
      </div>
      <div className={style.middle}>
        <img src={leaf} alt="" />
      </div>
      <div className={style.right}>
        <p>With your support, Supernatural gives back</p>
        <br />
        <div className={style.mobileImg}>
          <img src={leaf} alt="" />
        </div>
        <p>Two trees planted for every purchase.</p>
      </div>
    </div>
  </div>
)

export default ThreeColumn
