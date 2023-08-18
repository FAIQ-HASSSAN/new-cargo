import React from 'react'
import './Footer.css'
import {  FaInstagram, FaFacebookSquare,FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Payment from '../assets/paymes (1).png'
import { Trans } from 'react-i18next';
function Footer({faqID,supportID}) {
  const navigate = useNavigate();

  const m_gdpr =()=>{
    navigate('/GDPR');
  }

  const handleSupportClick = () => {
    const formSection = document.getElementById('support-form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFaqClick = () => {
    const formSection = document.getElementById('faq-form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_aboutus">
          <h3><Trans  i18nKey="description.footerpart0">Company</Trans></h3>
          <ul>
          <NavLink to = '/About'> <li><Trans i18nKey="description.footerpart1">About</Trans></li></NavLink> 
           {/* <li onClick={handleFaqClick}><Trans i18nKey="description.footerpart2">FAQ</Trans></li> */}
           <li>
            {/* <Trans i18nKey="description.footerpart2">FAQ</Trans> */}
            <a href={faqID}>FAQ</a>
            </li>
            <li><Trans i18nKey="description.footerpart3">Blog</Trans></li>
            
          </ul>
        </div>
        <div className="footer_company">
          <h3><Trans i18nKey="description.footerpart4">Legal</Trans></h3>
          <ul>
          <li onClick={m_gdpr}><Trans i18nKey="description.footerpart5">GDPR</Trans></li>
           <NavLink to='/privacypolicy'> <li><Trans i18nKey="description.footerpart6">Privacy Policy</Trans></li></NavLink>
           <NavLink to='/Termsandconditions'> <li><Trans i18nKey="description.footerpart7">Terms and Conditions</Trans></li></NavLink>
          <NavLink to='/Cookiepolicy'>  <li><Trans i18nKey="description.footerpart8">Cookie Policy</Trans></li> </NavLink>
            {/* <li><Trans i18nKey="description.footerpart9">Compliance Statement</Trans></li>
            <li><Trans i18nKey="description.footerpart10">Security profile</Trans></li>      */}
          </ul>
        </div>
        <div className="footer_contactus">
          <h3><Trans i18nKey="description.footerpart11">Contact Us</Trans></h3>
          <ul>
          {/* <li onClick={handleSupportClick}><Trans i18nKey="description.footerpart12">Support</Trans></li> */}
          <li>
            {/* <Trans i18nKey="description.footerpart12">Support</Trans> */}
            <a href={supportID}>Support</a>
          </li>
          </ul>
        </div>
      </div>
      <div className='footer_payment' >
        <img  src={Payment} alt='Paymentgateways'  />
      </div>
      <div className="footer_end">
        <p>&copy;<Trans i18nKey="description.footerpart13"> 2021 All rights reserved by XYZ Company </Trans></p>
        <FaInstagram className='icons' size={20} color="gray" />
        <FaFacebookSquare className='icons' size={20} color="gray" />
        < FaTwitter className='icons' size={20} color="gray" />
      </div>
    </div>
  )
}

export default Footer
