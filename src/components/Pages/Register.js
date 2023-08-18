import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.PNG'
import { NavLink} from 'react-router-dom'
import './css/Register.css'
import { useTranslation, Trans } from 'react-i18next';
import axios from 'axios';
const Register = () => {
  const { t, i18n } = useTranslation();

  const [Name, setName] = useState(''); // Set initial value to an empty string
  const [lastName, setLastName] = useState(''); 
   const [email, setEmail] = useState(''); // Set initial value to an empty string
  const [password, setPassword] = useState(''); 
  const [passwordagain,setpasswordagain] = useState('');
  const [Telephone,settelephone] = useState('');

  const registerUser =(event) =>{
    event.preventDefault();
    const baseUrl = 'http://amrahlielvin-002-site2.atempurl.com'; // Replace with your API base URL
   // const url = '/api/Login/Register?jwt=Excepteur';
   const url = '/api/Login/Register?jwt=Excepteur';

    const data = {
      Name: Name,
      LastName: lastName,
      email:email,
      Telephone:Telephone,
      password: password,
      passwordagain:passwordagain
    };
    
        console.log('data:',data)
    axios.post(url, data,{
    
      headers: {
      'Content-Type': 'application/json',
        'Accept': 'text/plain',
     
      },
    })
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  }


  return (
    <div className='leftside'>
  <div className="welcome-container">
 <img className='main_logo' src={logo}/>
 {/* <h1 className='h1_1'><Trans i18nKey="description.registerpart1">Geliver ile</Trans></h1>
 <h1 className='h1_2'><Trans i18nKey="description.registerpart2">kolayca gelsin!</Trans></h1> */}
 <h1 className='p1'><Trans i18nKey="description.registerpart3">KAVVAY ile yurtdışı gönderileriniz daha hızlı</Trans></h1>
  </div>
      <div className="form-container">
      <h2 className='h2'><Trans i18nKey="description.registerpart4">Kayıt Olun</Trans></h2>

      <div className='login'>
  <p><Trans i18nKey="description.registerpart5">veya</Trans></p>
  <NavLink className='loginlink' to='/login'><Trans i18nKey="description.registerpart6">Giriş Yapın</Trans></NavLink>
  </div>

      <form  >
        <div className="input-group">
          <label htmlFor="firstName"><Trans i18nKey="description.registerpart7">İsim:</Trans></label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={Name} onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName"><Trans i18nKey="description.registerpart8">Soyisim:</Trans></label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName} onChange={e => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email"><Trans i18nKey="description.registerpart9">E-posta:</Trans></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email} onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="telephone"><Trans i18nKey="description.registerpart10"> Telefon:</Trans></label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={Telephone} onChange={e => settelephone(e.target.value)}
            required
          />
        </div>
      
        <div className="input-group">
          <label htmlFor="password"><Trans i18nKey="description.registerpart11">Parola:</Trans></label>
          <input
            type="password"
            id="password"
            name="password"   
            value={password} onChange={e => setPassword(e.target.value)}       
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword"><Trans i18nKey="description.registerpart12">Parola Tekrar:</Trans></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwordagain} onChange={e => setpasswordagain(e.target.value)}
            required
          />
        </div>
      

        <div className='remember'>
    <label>
          <input className="check" type="checkbox" />   
        </label>
        <div>
        <div className="rlinks-container">
        <p>
          <NavLink to="/GDPR"><Trans i18nKey="description.registerpart131">Kişisel Verilerin Korunması</Trans></NavLink>,
          <NavLink to="/privacypolicy"><Trans i18nKey="description.registerpart132">Ticari Elektronik İleti Onay Metni</Trans></NavLink>,
          <NavLink to="/Termsandconditions"><Trans i18nKey="description.registerpart133">Kullanıcı Sözleşmesi</Trans></NavLink>,
          <NavLink to="/Cookiepolicy "><Trans i18nKey="description.registerpart134">Çerez Politikası</Trans></NavLink>, 
          <Trans i18nKey="description.registerpart14">okudum ve onaylıyorum.</Trans>
        </p>

      </div>
        {/* <NavLink className='loginlink' to='/cygyu'><Trans i18nKey="description.registerpart13">Kullanıcı Sözleşmesini</Trans></NavLink> */}
        {/* <p><Trans i18nKey="description.registerpart14">okudum ve onaylıyorum.</Trans></p> */}
        </div>
      </div> 
        <div className='Button'>
 <form >
      {/* Your other input fields go here */}
      <Link to="/afterSignupPage" >
      <button  type="submit" className="login-btn" onClick={registerUser}>
        <i className="fas fa-lock"></i>
        <span ><Trans i18nKey="description.registerpart15">Kayıt Ol</Trans></span>
      </button>
      </Link>
    </form>
    
 </div>
      </form>

      </div>
    </div>
  );
};

export default Register;
