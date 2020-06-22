import React from "react"
import style from "./footer.module.css"

const Footer = () => (
  <footer>
    <div className={style.column}>
      <p>SHOP</p>
      <ul>
        <li>
          <a href="https://supernatural.com/collections/all">All Products</a>
        </li>
        <li>
          <a href="https://supernatural.com/collections/home-care">Home Care</a>
        </li>
        <li>
          <a href="https://supernatural.com/collections/refills">Refills</a>
        </li>
        <li>
          <a href="https://supernatural.com/collections/essential-oil-blends">
            Essential Oil Blends
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/products/gift-card">Gift Card</a>
        </li>
      </ul>
      <div className={style.spacer}></div>
      <p>Support</p>
      <ul>
        <li>questions@supernatural.com</li>
        <li>
          <a href="https://supernatural.com/pages/faq">FAQ</a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/contact">Contact Us</a>
        </li>
      </ul>
    </div>

    <div className={style.column}>
      <p>our home planet</p>
      <ul>
        <li>
          <a href="https://supernatural.com/pages/supernatural-being">
            Supernatural Being
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/supernaturalhome">
            Supernatural Home
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/effectiveness">
            Effectiveness
          </a>
        </li>
      </ul>
      <div className={style.spacer}></div>
      <p>Legal</p>
      <ul>
        <li>
          <a href="https://supernatural.com/pages/privacy-policy">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/terms-conditions">
            Terms & Conditions
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/refund-policy">
            Refund Policy
          </a>
        </li>
      </ul>
    </div>

    <div className={style.column}>
      <p>referral probram</p>
      <ul>
        <li>
          <a href="https://supernatural.com/pages/share">Referral</a>
        </li>
      </ul>
      <div className={style.spacer}></div>
      <p>Service discounts</p>
      <ul>
        <li>
          <a href="https://supernatural.com/pages/exclusive-discounts">
            Military Discount
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/exclusive-discounts">
            Medical Worker Discount
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/exclusive-discounts">
            First Responder Discount
          </a>
        </li>
        <li>
          <a href="https://supernatural.com/pages/exclusive-discounts">
            Teacher Discount
          </a>
        </li>
      </ul>
    </div>

    <div className={style.column}>
      <p>Find us</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/beingsupernatural/">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/supernaturalbeing/">Instagram</a>
        </li>
      </ul>
      <div className={style.spacer}></div>
      <div className={style.stayUpdated}>
        <p>stay updated</p>
        <a href="#" className={style.arrow}></a>
      </div>
      <p className={style.subscribe}>
        Subscribe to our newsletter to get Mama Earth inspired content and
        exclusive promotions.
      </p>
    </div>
  </footer>
)
export default Footer
