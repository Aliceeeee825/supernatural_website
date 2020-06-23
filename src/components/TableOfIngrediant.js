import React from "react"
import style from "./tableOfIngradient.module.css"

import linesLeft from '../images/linesLeft.png'
import linesRight from '../images/linesRight.png'

const TableOfIngrediant = () => (
  <div className={style.tableContainer}>
    <h3>What's In Our Products?</h3>

    <div className={style.category}>
      <input type="checkbox" id="counter" />
      <label
        className={style.name}
        for="counter"
      >
        Counters + Granite
      </label>
      <div className={style.vl}></div>
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
              <span className="bold">Sodium Cocoyl Glutamate</span> <br></br>{" "}
              derived from coconut or palm
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
              <span className="bold">Colloidal silver</span> <br></br> made from
              silver suspended in liquid
            </td>
            <td>Anti Bacterial/ Anti Viral/ Anti Microbial</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Decyl Glucoside</span>
              <br></br> Coconut and Corn Sugars
            </td>
            <td>Detergent</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Alcohol Denat</span> <br></br> 190 proof
              alchohol derivedfrom grain or corn and denatured with rosemary
              oil.
            </td>
            <td>Solvent, Disinfectant</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Citrate</span> <br></br> salt of
              citric acid
            </td>
            <td>Preservative & Emulsifier</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PEPPERMINT Essential Oil</span>
            </td>
            <td>Anti Bacterial/ Anti Viral</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PALMAROSA Essential Oil</span>
            </td>
            <td>Anti Bacterial </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* glass table */}
    <div className={style.category}>
      <input type="checkbox" id="glass" />
      <label className={style.name} for="glass">
        Glass + Mirrors
      </label>
      <div className={style.vl}></div>
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
              <span className="bold">Colloidal Silver</span> made from silver
              suspended in liquid
            </td>
            <td>Anti Bacterial / Anti Viral / Anti Microbial</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PINK GRAPEFRUIT Essential OIl</span>
            </td>
            <td>Acidic Qualities cut Greese</td>
          </tr>
          <tr>
            <td>
              <span className="bold">
                <span className="bold">Alcohol Denant</span> 190 proof alcohol
                derived from grain or corn and denatured with rosemary oil
              </span>
            </td>
            <td>Solvent, Disinfectant</td>
          </tr>
          <tr>
            <td>
              <span className="bold">LEMON Essential OIl</span>
            </td>
            <td>Acidic Qualities cut Greese / Anti Viral</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Cocoyl Glutamate</span> derived from
              coconut or palm
            </td>
            <td>Detergent</td>
          </tr>
          <tr>
            <td>
              <span className="bold">LIME Essential Oil</span>
            </td>
            <td>Acidic Qualities cut Greese</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Grapefruit Seed Extract</span> derived from
              grapefruit seeds
            </td>
            <td>Anti Bacterial / Anti Viral </td>
          </tr>
          <tr>
            <td>
              <span className="bold">SWEET ORANGE Essential Oil</span>
            </td>
            <td>Acidic Qualities cut Greese / Anti Bacterial </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Glycerin</span> made from soy, coconut or
              palm
            </td>
            <td>Moisturizing Emulsifier</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Citirc Acid</span> Citrus Fruits
            </td>
            <td>Natural Preservative </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Decyl Glucoside</span> Coconut and Corn
              Sugars
            </td>
            <td>Detergent </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Lactic Acid</span> Beets
            </td>
            <td>
              Exfoliant, fragrance ingredient, humectant, ph adjuster,
              skin-conditioning agent - humectant, skin-conditioning agent -
              miscellaneous, buffering, and skin conditioning
            </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Citrate</span> salt of citric acid
            </td>
            <td>Preservative & Emulsifier</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* bath table */}
    <div className={style.category}>
      <input type="checkbox" id="bath" />
      <label className={style.name} for="bath">
        Bath + Tile
      </label>
      <div className={style.vl}></div>
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
              <span className="bold">Sodium Cocoyl Glutamate</span> <br></br>{" "}
              derived from coconut or palm
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
              <span className="bold">Colloidal silver</span> <br></br> made from
              silver suspended in liquid
            </td>
            <td>Anti Bacterial/ Anti Viral/ Anti Microbial</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Decyl Glucoside</span>
              <br></br> Coconut and Corn Sugars
            </td>
            <td>Detergent</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Alcohol Denat</span> <br></br> 190 proof
              alchohol derivedfrom grain or corn and denatured with rosemary
              oil.
            </td>
            <td>Solvent, Disinfectant</td>
          </tr>
          <tr>
            <td>
              <span className="bold">LIME Essential Oil</span>
            </td>
            <td>Acidic Qualities cut Greese</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PEPPERMINT Essential Oil</span>
            </td>
            <td>Anti Bacterial / Anti Viral </td>
          </tr>
          <tr>
            <td>
              <span className="bold">PALMAROSA Essential Oil</span>
            </td>
            <td>Anti Bacterial </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Glycerin</span> made from soy, coconut or
              palm
            </td>
            <td>Moisturizing Emulsifier</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Citirc Acid</span> Citrus Fruits
            </td>
            <td>Natural Preservative </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Eucalyptus Essential OIl</span>
            </td>
            <td>Anti Bacterial/ Anti Viral </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Magnesium Sulfate</span> epsom salt
            </td>
            <td>viscosity agent, bulking agent, degreasing</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Lactic Acid</span> Beets
            </td>
            <td>
              Exfoliant, fragrance ingredient, humectant, ph adjuster,
              skin-conditioning agent - humectant, skin-conditioning agent -
              miscellaneous, buffering, and skin conditioning
            </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Citrate</span> salt of citric acid
            </td>
            <td>Preservative & Emulsifier</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* wood table */}
    <div className={style.category}>
      <input type="checkbox" id="wood" />
      <label className={style.name} for="wood">
        Wood + Floors
      </label>
      <div className={style.vl}></div>
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
              <span className="bold">FIR Essential Oil</span>
            </td>
            <td>De-odorizer/inhibits bacteria</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Colloidal silver</span> <br></br> made from
              silver suspended in liquid
            </td>
            <td>Anti Bacterial/ Anti Viral/ Anti Microbial</td>
          </tr>
          <tr>
            <td>
              <span className="bold">LAVENDER Essential Oil</span>
            </td>
            <td>Anti Bacterial/ Anti Viral/Anti Fungal</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Quillaja Saponaria Bark Extract</span> made
              from quillaja saponaria bark
            </td>
            <td>Detergent</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Citrate</span> salt of citric acid
            </td>
            <td>Preservative & Emulsifier</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PALMAROSA Essential Oil</span>
            </td>
            <td>Anti Bacterial </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Sodium Cocoyl Glutamate</span> <br></br>{" "}
              derived from coconut or palm
            </td>
            <td>Detergent</td>
          </tr>
          <tr>
            <td>
              <span className="bold">PEPPERMINT Essential Oil</span>
            </td>
            <td>Anti Bacterial / Anti Viral </td>
          </tr>
          <tr>
            <td>
              <span className="bold">olea europaea (olive) fruit oil</span>{" "}
              Olives
            </td>
            <td>Anti Bacterial / Anti Viral </td>
          </tr>
          <tr>
            <td>
              <span className="bold">Citirc Acid</span> Citrus Fruits
            </td>
            <td>Natural Preservative </td>
          </tr>
          <tr>
            <td>
              <span className="bold">BASIL Essential Oil</span>
            </td>
            <td>Anti Bacterial/ Anti Viral</td>
          </tr>
          <tr>
            <td>
              <span className="bold">Decyl Glucoside</span>
              <br></br> Coconut and Corn Sugars
            </td>
            <td>Detergent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <img
      className={`${style.leftLines} ${style.lines}`}
      src={linesLeft}
      alt=""
    />
    <img
      className={`${style.rightLines} ${style.lines}`}
      src={linesRight}
      alt=""
    />

    {/* <div className={style.category}>
      <button className={style.name}>Bath + Tile</button>
      <button className={style.plus}></button>
    </div>

    <div className={style.category}>
      <button className={style.name}>Wood + Floors</button>
      <button className={style.plus}></button>
    </div> */}
  </div> //table of ingredients ends here
)

export default TableOfIngrediant
