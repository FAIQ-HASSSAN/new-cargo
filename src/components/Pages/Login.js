import React,{useEffect, useState} from 'react'
import './css/Login.css'
import logo from '../../assets/logo.PNG'
import { Link, NavLink ,useNavigate } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next';
import axios from 'axios';
function Login() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState(''); // Set initial value to an empty string
  const [password, setPassword] = useState(''); 

  const [pemail, setPEmail] = useState('E-posta adresi'); // Set initial value to an empty string
  const [ppassword, setPPassword] = useState('Parola'); 


  useEffect(()=>{
if(i18n.language !== 'en'){
   setPEmail('E-posta adresi')
   setPPassword('Parola')
}
else{
  setPEmail('Email Address')
  setPPassword('Password')
}
  },[i18n.language])


 
  const navigate = useNavigate();

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InRvZmlxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidG9maXFtYW1tYWRvdkBtYWlsLnJ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3lzdGVtIjoiOSIsImV4cCI6MTY5MjAzNzQ3NCwiaXNzIjoid3d3LnRlc3QuY29tIiwiYXVkIjoid3d3LnRlc3QuY29tIn0.RsQY4I9M1dsP8HMQIkcSPI60dM6fbW9hvdnp2CNxFrw'

  const handleLogin = (event) => {
    event.preventDefault();
 
    const apiUrl = '/api/Login'; // Replace with your API endpoint URL

    const data = {
      email: 'tofiqmammadov@mail.ru',
  password: '123123'
    };
  console.log('login data:',data)

  fetch('/api/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
   
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((data) => {
      console.log('Response:', data);

      navigate('/afterLoginPage');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  };

  const baseUrl = 'http://amrahlielvin-002-site2.atempurl.com';
  const [countries, setCountries] = useState([]);



  const fetchCountries = async (event) => {
    event.preventDefault();
    // Using fetch API
    fetch("/api/GetCountries", {
      method: "GET",
      headers: {
        Accept: "text/plain",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Countries:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


  };


  
  return (
    <div className='container'>
    <img className='main_logo' src={logo} alt='prop'/>
    <h1 className='H1'><Trans  i18nKey="description.loginpart1">Üye Girişi Yapın</Trans></h1>


    <div className='signup'>
  <p><Trans i18nKey="description.loginpart2">veya</Trans></p>
  <NavLink className='signuplink' to='/register'><Trans i18nKey="description.loginpart3">Yeni üyelik oluşturun</Trans></NavLink>
  </div>


  <div className='Input'>
    <input type='text' placeholder={pemail} value={email} onChange={e => setEmail(e.target.value)}/>
    <input type='password' placeholder={ppassword} value={password} onChange={e => setPassword(e.target.value)}/>
    </div>   

    <div className='remember'>
    <label className='label1'>
          <input type="checkbox" />
          <Trans i18nKey="description.loginpart4">Beni hatırla</Trans>
        </label>
        <NavLink className='signuplink1' to='/resetpassword'><Trans i18nKey="description.loginpart5">Şifremi unuttum</Trans></NavLink>
      </div> 


 <div className='Button'>
 <form >
       <Link to="/afterLoginPage">
      <button type="submit" className="login-btn" >
        <i className="fas fa-lock"></i>
        <span><Trans i18nKey="description.loginpart6">Giriş yapmak</Trans></span>
      </button>
      </Link>
    </form>
    
 </div>
    </div>
  )
}

export default Login
