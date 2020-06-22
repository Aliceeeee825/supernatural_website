import React from "react"
import style from "./compareTable.module.css"

import checkmark from '../images/checkMark.png'
import crossmark from '../images/crossMark.png'
import linesLeft from '../images/linesLeft.png'
import linesRight from '../images/linesRight.png'

const CompareTable = () => (
    <div className={style.tableContainer}>
        <h3>Supernatural vs Other Cleaners</h3>
        

        <img className={`${style.leftLines} ${style.lines}`} src={linesLeft} alt="" />
        <img className={`${style.rightLines} ${style.lines}`} src={linesRight} alt="" />

        <div className={style.compareTableContainer}>
            <table className={style.compareTable}>
                <thead>
                    <tr>
                        <th></th>
                        <th>100% Non-Toxic</th>
                        <th>Plant-Based Ingredients</th>
                        <th>Lab-tested cleaner</th>
                        <th>Contains Allergens</th>
                        <th>100% money-back garuantee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Supernatural</td>
                        <td><img src={checkmark} alt="a check mark"/></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                    </tr>
                    <tr>
                        <td>Mrs. Meyers</td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                    </tr>
                    <tr>
                        <td>Clean Cult</td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                    </tr>
                    <tr>
                        <td>Method</td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                    </tr>
                    <tr>
                        <td>Seventh Generation</td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={checkmark} alt="a check mark" /></td>
                        <td><img src={crossmark} alt="a cross mark" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default CompareTable