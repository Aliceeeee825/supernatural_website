import React from "react"
import style from "./tableOfIngradient.module.css"

import linesLeft from '../images/linesLeft.png'
import linesRight from '../images/linesRight.png'

const TableOfIngrediant = () => (
  <div className={style.tableContainer}>
    <h3>What's In Our Products?</h3>

    <div className={style.category}>
      <button className={style.name}>Counters + Granite</button>
      <button className={style.minus}></button>
    </div>

    <img className={`${style.leftLines} ${style.lines}`} src={linesLeft} alt=""/>
    <img className={`${style.rightLines} ${style.lines}`} src={linesRight} alt=""/>

    <table className={style.tableOfIngrediant}>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Cleaning Benefit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className="bold">Sodium Cocoyl Glutamate</span> <br></br> derived from
            coconut or palm
          </td>
          <td>Detergent</td>
        </tr>
        <tr>
          <td>
            <span className="bold">FIR Essential Oil</span>
          </td>
          <td>De-odorizer/inhibits bacteria</td>
        </tr>
        <tr>
          <td>
            <span className="bold">LITSEA CUBEBA</span>
          </td>
          <td>Antifungal</td>
        </tr>
        <tr>
          <td>
            <span className="bold">BASIL Essential Oil</span>
          </td>
          <td>Anti Bacterial/ Anti Viral</td>
        </tr>
        <tr>
          <td>
            <span className="bold">Colloidal silver</span> <br></br> made from silver
            suspended in liquid
          </td>
          <td>Anti Bacterial/ Anti Viral/ Anti Microbial</td>
        </tr>
        <tr>
          <td><span className="bold">Decyl Glucoside</span><br></br> Coconut and Corn Sugars</td>
          <td>Detergent</td>
        </tr>
        <tr>
          <td>
            <span className="bold">Alcohol Denat</span> <br></br> 190 proof alchohol
            derivedfrom grain or corn and denatured with rosemary oil.
          </td>
          <td>Solvent, Disinfectant</td>
        </tr>
        <tr>
          <td><span className="bold">Sodium Citrate</span> <br></br> salt of citric acid</td>
          <td>Preservative & Emulsifier</td>
        </tr>
        <tr>
          <td><span className="bold">PEPPERMINT Essential Oil</span></td>
          <td>Anti Bacterial/ Anti Viral</td>
        </tr>
        <tr>
          <td><span className="bold">PALMAROSA Essential Oil</span></td>
          <td>Anti Bacterial </td>
        </tr>
      </tbody>
    </table>

    <div className={style.category}>
      <button className={style.name}>Glass + Mirrors</button>
      <button className={style.plus}></button>
    </div>

    <div className={style.category}>
      <button className={style.name}>Bath + Tile</button>
      <button className={style.plus}></button>
    </div>

    <div className={style.category}>
      <button className={style.name}>Wood + Floors</button>
      <button className={style.plus}></button>
    </div>
  </div> //table of ingredients ends here
)

export default TableOfIngrediant
