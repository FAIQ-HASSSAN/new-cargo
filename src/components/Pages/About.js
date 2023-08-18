import React from 'react'
import './css/About.css'
import Footer from '../Footer'
import { useTranslation,Trans } from 'react-i18next';
import Questions from '../Questions'

export const About = () => {
  const { t, i18n } = useTranslation();
  return (
<>
    <div className="about_main1">
      <div className="about_image1">
        <h1><Trans i18nKey="description.aboutpart1">About</Trans></h1>
      </div>
      <div className="heading">
        <h2><Trans i18nKey="description.aboutpart2">OPTIMIZE THE POST-PURCHASE EXPERIENCE FOR eCOMMERCE WITH KAVVAY</Trans></h2>
        {/* <p>
         <Trans i18nKey="description.aboutpart3"> We're a young and fast growing business born in Turkey and looking to expand across the globe with team of technology and retail experts 
         spread across different countries and different regions. We like to build high performance solutions for eCommerce businesses and have an unrelenting drive to build things fast and with outstanding quality.</Trans>
        </p> */}
      </div>
      <div className="about_section_2">
        <div className="left_side">
        <p>
         <Trans i18nKey="description.aboutpart3"> We're a young and fast growing business born in Turkey and looking to expand across the globe with team of technology and retail experts 
         spread across different countries and different regions. We like to build high performance solutions for eCommerce businesses and have an unrelenting drive to build things fast and with outstanding quality.</Trans>
        </p>
          <p>
          <Trans i18nKey="description.aboutpart4">  We are aware that companies are experiencing an important cargo
            process in the background. We set out with the idea of ​​making your
            life easier and managing all your cargo processes. While providing
            an easy shipping experience to cargo companies, we offer the most
            suitable cargo alternatives with dynamic pricing and fast delivery.</Trans>
          </p>
          
          <p><Trans i18nKey="description.aboutpart6">Your shipping process is much easier with us!</Trans></p>
        </div>
      </div>
      {/* <div id="faq-form-section">
      <Questions/>
    </div> */}
  <div className='Afoot'></div>
      <div className='Afooter'>
      <Footer faqID={'/'} supportID={'/contact'}/>
      </div>
    </div>
    </>
  )
}
