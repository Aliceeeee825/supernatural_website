import React from "react"
import style from "./sellingCard.module.css"

import fiveStars from '../images/fiveStars.png'
import guranteed from '../images/guaranteed.png'
import afterpay from '../images/afterPay.png'
import bestseller from '../images/bestsellerImg.png'
import bestsellerMobile from '../images/bestsellerImgMobile.png'
import blackButton from '../images/blackButtonSellingCard.png'

const SellingCard = () => (
  <div className={style.sellContainer} id="sellingCard">
    <h2>Say goodbye to harsh chemicals. Say hello to Supernatural</h2>

    <div className={style.twoColumnContainer}>
      <div className={`${style.twoColumn} ${style.left}`}>
        <h4>Supernatural Starter Kit</h4>
        <div className={style.rating}>
          <img src={fiveStars} alt="" />
          <a href="#">Over 500 reviews</a>
        </div>
        <div className={style.description}>
          <span>4</span>
          <p>
            Supernatural resuable frosted-glass spray bottles for each suface.
          </p>
        </div>
        <div className={style.description}>
          <span>4</span>
          <p> Supernatural plant powered surface concentrates:</p>
        </div>
        <ul>
          <li>Counters + Granite</li>
          <li>Glass + Mirrors</li>
          <li>Bath + Tile</li>
          <li>Wood + Floors</li>
        </ul>

        <div className={style.priceRow}>
          <div>
            <span className={style.originalPrice}>$75</span>
            <span className={style.newPrice}>$49</span>
          </div>
          <img src={guranteed} alt="" />
        </div>
        <button>
          <a href="https://supernatural.com/cart/1249396752413:1?discount=WELCOME35">
            <img src={blackButton} alt="" />
          </a>
        </button>
        <div className={style.installments}>
          <p>
            or 4 interest-free installments of $13.13 by{" "}
            <img src={afterpay} alt="" />
          </p>
        </div>
      </div>
      <div className={`${style.twoColumn} ${style.right}`}>
        <img className={style.desktop} src={bestseller} alt="" />
        <img className={style.mobile} src={bestsellerMobile} alt="" />
      </div>
    </div>
  </div>
)

export default SellingCard
