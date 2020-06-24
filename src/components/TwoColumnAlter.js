import React from "react"
import style from "./twoColumnAlter.module.css"

import product from '../images/productWLineLeft.png'
import unboxing from '../images/unboxing.png'
import unboxingWFlower from '../images/unboxingWFlower.png'
import flowerWCicle from '../images/flowerMadeWCircles.png'
import fancyFlower from '../images/fancyFlower.png'
import cleaning from '../images/cleaning.png'
import blackButton from '../images/blackButtonAlt.png'

const twoColumnAlter = () => (
  <div className={style.twoColumnContainer}>
    <div className={style.row}>
      <div className={`${style.text} ${style.left}`}>
        <h5>reusable glass bottles</h5>
        <p>
          Our beautiful reusable glass bottles are designed to be{" "}
          <span className="bold">used over and over again.</span>
          <br />
          <div className={style.spacer}></div>
          <span className="bold">
            Using Supernatural eliminates 98% of your home’s plastic waste
          </span>{" "}
          from cleaning products that would otherwise wind up in our landfills
          and oceans.
        </p>
      </div>
      <div className={`${style.image} ${style.right}`}>
        <img className={style.productImg} src={product} alt="" />
      </div>
    </div>

    <div className={style.row}>
      <div className={`${style.image} ${style.left}`}>
        <img className={style.desktopUnboxing} src={unboxing} alt="" />
        <img className={style.mobileUnboxing} src={unboxingWFlower} alt="" />
      </div>
      <div className={`${style.text} ${style.right}`}>
        <h5>REDUCE CARBON EMISSIONS</h5>
        <p>
          Our concentrated,{" "}
          <span className="bold">just-add-water formulas</span> reduces carbon
          emissions by not shipping millions of gallons of heavy water around
          the world. We use recycled materials in all of our packaging.
        </p>
        <img className={style.flowerWCicle} src={flowerWCicle} alt="" />
      </div>
    </div>

    <div className={style.row}>
      <div className={`${style.text} ${style.left}`}>
        <h5>non-toxic</h5>
        <p>
          We use only natural ingredients from plants, minerals, and essential
          oils, which make our products safer for you, your home, and the earth.
        </p>
        <img className={style.fancyFlower} src={fancyFlower} alt="" />
      </div>
      <div className={`${style.image} ${style.right}`}>
        <img src={cleaning} alt="" />
      </div>
    </div>
    <button><img src={blackButton} alt=""/></button>
  </div>
)

export default twoColumnAlter
