import React from "react"
import style from "./centeredText.module.css"

import flower from '../images/flower.png'

const CenteredText = () => (
  <div className={style.container}>
    <div className={style.leftCorner}>
        <img src={flower} alt="A purple radial flower print" />
    </div>
    <div className={style.text}>
      <h2>Why clean with Supernatural?</h2>
      <p>
        Supernatural cleaners are lab-tested to be 100% non-toxic and proven to
        be <span className='bold'>more</span> effective than big-name cleaning brands. Supernatural only has
        natural, plant-based, and essential oil ingredients in their products,
        making it safe for your home, and safe for your family.
      </p>
      <br/>
      <p>
        With Supernatural, you can clean counters, granite, glass, mirrors,
        bath/showers, tile, hardwood, and floors.
      </p>
    </div>
  </div>
)

export default CenteredText