import React from 'react'
import './css/E-delivery.css'
import Footer from '../Footer'
import image from '../../assets/TİKLA GONDER.png'
import { useTranslation,Trans } from 'react-i18next';
export const EDelivery = () => {
  const { t, i18n } = useTranslation();


  return (

    <>
    <div className="about_main">
      <div className="about_image1">
        <h1><Trans i18nKey="description.epart1">Click'n'Ship</Trans></h1>
      </div>
      {/* <div className="heading">
        <h2><Trans i18nKey="description.epart2">Come Easily with Geliver!</Trans></h2>
        <h3>
         <Trans i18nKey="description.epart3">It manages all your shipping processes; We provide fast, easy and
          cheap cargo service!</Trans> 
        </h3>
      </div> */}

      <div className='whole_section'>
      <div className="about_section_2">
        <div className="left_side">
          <p className='p_1'>
         <Trans i18nKey="description.epart4"> Kavvay is the ultimate international shipping solution for your business. 
          Start shipping right away with pre negotiated rates and without having to deal with multiple delivery partners.</Trans>
          </p>
          
          <div className="heading">
        <h2><Trans i18nKey="description.epart5">Add your shipments</Trans></h2>
        <p>
     <Trans i18nKey="description.epart6">   Create shipments through a dashboard, with a spreadsheet or by using the Kavvay API and Kavvay eCommerce Connectors. 
        Shipments are automatically assigned to the cheapest, fastest or most reliable delivery partner through an AI-driven automation engine. 
        Alternatively, you can also select your preferred delivery service manually.</Trans>
        </p>
      </div>
    
      <div className="heading">
        <h2><Trans i18nKey="description.epart7">Print and manage labels</Trans></h2>
        <p>
       <Trans i18nKey="description.epart8"> Pack your orders, print the label and you are ready to ship! The delivery partner gets notified about your delivery.</Trans>
        </p>
      </div>

      <div className="heading">
        <h2><Trans i18nKey="description.epart9">Track your orders</Trans></h2>
        <p>
       <Trans i18nKey="description.epart10"> Automatically track your orders and get alerted of any late deliveries, exceptions or unsatisfied customers. 
        Offer your customers an exceptional experience by adding your own tracking page and setting up automated email or SMS notifications with information about the status of the shipment. 
        Manage expectations by monitoring and adjusting expected delivery dates to improve your service levels. 
        Use advanced reports to assess your past performance and make improvements to your operations.</Trans>
        </p>
      </div>


          
        </div>
      </div>

      <div className='cns_pic'>
        <img src={image} alt=''/>
      </div>
      </div>
<div className='edelivery_foot'></div>
      <div className='efooter'>
      <Footer faqID={'/'} supportID={'/contact'}/>
      </div>
    </div>
    </>
  )
}


export default EDelivery;