import React from "react"
import style from "./fourColumns.module.css"

import step1 from '../images/step1.png'
import sparkly1 from '../images/sparkly1.png'

import step2 from '../images/step2.png'
import sparkly2 from '../images/sparkly2.png'

import step3 from '../images/step3.png'
import sparkly3 from '../images/sparkly3.png'

import step4 from '../images/step4.png'
import sparkly4 from '../images/sparkly4.png'

const FourColumns = () => (
    <div className={style.fourColumnsContainer}>
        <div className={style.fourColumn}>
            <img src={step1} alt=""/>
            <img src={sparkly1} alt=""/>
            <h6>Make it rain</h6>
            <p>Fill a supernatural bottle with
            filtered water until it reaches the white line.</p>
        </div>

        <div className={style.fourColumn}>
            <img src={step2} alt="" />
            <img src={sparkly2} alt="" />
            <h6>COME TOGETHER</h6>
            <p>Pour the entire vial of concentrate into its consenting supernatural bottle.</p>
        </div>

        <div className={style.fourColumn}>
            <img src={step3} alt="" />
            <img src={sparkly3} alt="" />
            <h6>STIR THINGS UP</h6>
            <p>Secure the top and gently tip the bottle upside-down to combine the magicsauce.</p>
        </div>

        <div className={style.fourColumn}>
            <img src={step4} alt="" />
            <img src={sparkly4} alt="" />
            <h6>BREATHE DEEP</h6>
            <p>Rotate the nozzle, spritz, take a deep breath and begin your cleaning ritual.</p>
        </div>
    </div>
)

export default FourColumns