import React from "react"
import style from "./sellingCard.module.css"

import fiveStars from '../images/fiveStars.png'
import guranteed from '../images/guaranteed.png'
import afterpay from '../images/afterPay.png'
import bestseller from '../images/bestsellerImg.png'
import ball from '../images/ball.png'

const SellingCard = () => (
    <div className={style.sellContainer}>
    <h2>Say goodbye to harsh chemicals. Say hello to Supernatural</h2>

    <div className={style.twoColumnContainer}>
        <div className={`${style.twoColumn} ${style.left}`}>
        <h4>Supernatural Starter Kit</h4>
        <div className={style.rating}>
            <img src={fiveStars} alt="" />
            <a href="#">Over 500 reviews</a>
        </div>
        <p>
            Supernatural resuable frosted-glass spray bottles for each suface.
        </p>
        <p>Supernatural plant powered surface concentrates:</p>
        <ul>
            <li>Counters + Granite</li>
            <li>Glass + Mirrors</li>
            <li>Bath + Tile</li>
            <li>Wood + Floors</li>
        </ul>
        <div className={style.priceRow}>
            <span className={style.originalPrice}>$75</span>
            <span className={style.newPrice}>$49</span>
            <img src={guranteed} alt="" />
        </div>
        <button>Add to cart for 35% off</button>
        <div className={style.installments}>
            <p>or 4 interest-free installments of $13.13 by</p>
            <img src={afterpay} alt="" />
            <a href="#">More Info</a>
        </div>
        </div>
        <div className={`${style.twoColumn} ${style.right}`}>
        <img src={bestseller} alt=""/>
        <img src={ball} alt=""/>
        </div>
    </div>
    </div>
)

export default SellingCard
