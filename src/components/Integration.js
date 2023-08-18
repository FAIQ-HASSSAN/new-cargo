import React from 'react'
import './Integration.css'
import Image1 from '../assets/magento-1-logo-svg-vector.svg'
import Image2 from '../assets/opencart_rbg.png'
import Image3 from '../assets/WooCommerce_logo.png'
import Image4 from '../assets/shopify-icon.svg'
import Cards from './Cards'
import {Trans } from 'react-i18next';
function Integrations() {

  return (
    <div className="main">
      <h4><Trans i18nKey="description.homepart4">INTEGRATIONS </Trans></h4>
      <div className="main_logoandtext">
        <div className="images-logo">
          <div className="image_logo1">
            <img className='pic1' src={Image1} alt="logo1" />
          </div>
          <div className="image_logo1">
            <img  className='pic2' src={Image2} alt="logo1" />
          </div>
          <div className="image_logo1">
            <img  className='pic3'  src={Image3} alt="logo1" />
          </div>
          <div className="image_logo1">
            <img className='pic4' src={Image4} alt="logo1" />
          </div>
          
        </div>
        <div className="text-leftside">
          <h3><Trans i18nKey="description.homepart5">
          Speed up your shipments with Kavvay helpers and start making your shipments at affordable prices.
            </Trans>
          </h3>
          <Trans i18nKey="description.homepart6"><p>for more information on integrations .</p> </Trans>
        </div>
      </div>
        <Cards/>
      <div>
      </div>
    </div>
  )
}

export default Integrations
