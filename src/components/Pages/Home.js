import React from 'react'
import './css/home.css'
import Integrations from '../Integration'
import Slider from '../Slider'
import Questions from '../Questions'
import Footer from '../Footer'
import Form from '../Form'
import { NavLink } from 'react-router-dom'
import {useTranslation, Trans } from 'react-i18next';
import hambergerpic from '../../assets/Homepagebanner (1).png'

export const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div className="main_home_container">
      <div className="main_home_text">
        <h1><Trans i18nKey="description.homepart1">Yurtdışına Hızlı Gönderi</Trans></h1>
        <p className='customize_para' >
          <Trans i18nKey="description.homepart2"> 
        Kavvay, uluslararası gönderi sürecinizi sorunsuzca ve otomatik şekilde yönetir, belirli ülkelere uygun fiyattan havayolu ile gönderi yapmanıza yardımcı olur.
        </Trans>
        </p>
    <NavLink to="/register"><button className="btn"><Trans i18nKey="description.homepart3">Register For Free</Trans></button></NavLink>
      </div>
      <div className="image-here">
        <img src={hambergerpic} alt=''/>
      </div>
    </div>
   
    <div>
      <Integrations/>
    </div>
    <div>
      <Slider/>
    </div>
    <div id="faq-form-section">
      <Questions/>
    </div>
    <div id="support-form-section">
     
     <Form />
   
    </div>
    <div>
      <div className='partion_line' ></div>
      <div>
        <Footer faqID={'#faq-form-section'} supportID={'#support-form-section'}/>
      </div>
    </div>
    </>
  )
}
