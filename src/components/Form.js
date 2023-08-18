import React, { useEffect, useState } from 'react'
import './Form.css'
import Home from '../assets/contact eng.png'
import Home1 from '../assets/contact tr.png'
import { FaMailBulk, FaPhone} from 'react-icons/fa'
import Input from './Input'
import { useTranslation, Trans } from 'react-i18next';
function Form() {
  const {i18n } = useTranslation();
  var  da = 'name its working';

const [input1,setinput1]=useState('');
const [input2,setinput2]=useState('');
const [input3,setinput3]=useState('');
const [input4,setinput4]=useState('');

  useEffect(()=>{

    console.log('hello')

if(i18n.language === 'en'){
 setinput1('Name Surname');
}
else{
 setinput1('Ad Soyad');
}

if(i18n.language === 'en'){
  setinput2('E-mail');
 }
 else{
  setinput2('E-posta');
 }

 if(i18n.language === 'en'){
  setinput3('Telephone');
 }
 else{
  setinput3('Telefon');
 }

 if(i18n.language === 'en'){
  setinput4('Message...');
 }
 else{
  setinput4('Mesaj...');
 }

  },[i18n.language])


  return (
    <div className="Form_main" id="support-form-section">
      <h1><Trans i18nKey="description.homepart9">Contact</Trans></h1>
      <div className="form_Box">
        <div className="form_Box1">
          <div>
            <h4><Trans i18nKey="description.homepart10">Contact information </Trans></h4>
            {i18n.language==='en' ?(
         <img src={Home} alt="home" />
            ):(
              <img src={Home1} alt="home" />
            )

            }
           
            <p className="para">
             <Trans i18nKey="description.homepart11">Adres: Nispetiye Mahallesi, Gazi Güçnar sokak, Uygur İş Merkezi No 4/2, Beşiktaş, İstanbul, 34000
</Trans>
            </p>
            <div className="contact1">
              <FaPhone />
              <p>+90 (236) 503-8611</p>
            </div>
            <div className="contact2">
              <FaPhone />
              <p>+90 (236) 503-8611</p>
            </div>
            <div className="mail">
              <FaMailBulk />
              <p>info@kavvay.com</p>
            </div>
          </div>
        </div>
        <div className="form_Box2">
          <Input 
          
          placeholder={input1}
          
          onChange={() => {}} />
          <Input
            placeholder={input2}
           
            onChange={() => {}}
          />
          <Input placeholder={input3} onChange={() => {}} />
          <textarea
            style={{borderRadius:5,width: '80%', marginTop: 20, padding: 8 }}
            //rows={16}
            placeholder={input4}
          ></textarea>
          <button>
          <Trans i18nKey="description.homepart13">Send</Trans>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
