import React from "react"
import headerStyle from './header.module.css'


import logo from '../images/logo.png';
import productImgWDiscount from '../images/productImgwdiscount.png'

const Header = () => (
  <header>
    <div className={headerStyle.stickyHeader}>
      <div className={headerStyle.leadFlow}>
        <p>LIMITED-TIME OFFER: GET 35% OFF A STARTER KIT TODAY!</p>
      </div>
      <div className={headerStyle.logoBanner}>
        <img src={logo} alt="supernatural logo" />
        <a href="#">Get 35% off</a>
      </div>
    </div>
    {/* End of sticky header */}
    <div className={headerStyle.twoColumnContainer}>
      <div className={`${headerStyle.twoColumn} ${headerStyle.left}`}>
        <h1>
          Meet the first certified non-toxic cleaner, made from 100% all-natural
          ingredients.
        </h1>
        <p>For a limited-time only, get <span className={headerStyle.bold}>35% off</span> the starter set.</p>
        <div className={headerStyle.priceRow}>
          <span className={headerStyle.originalPrice}>$75</span>
          <span className={headerStyle.newPrice}>$49</span>
          <span className={headerStyle.shipping}>+ Free shipping</span>
        </div>
        <button>Get 35% off your set</button>
      </div>
      {/* twocolumn left ends */}
      <div className={`${headerStyle.twoColumn} ${headerStyle.right}`}>
        <img
          src={productImgWDiscount}
          alt="product image with the 35% off label"/>
      </div>
    </div>
    {/* two column container ends here */}
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
