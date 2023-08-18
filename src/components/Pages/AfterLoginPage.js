// AfterLoginPage.js
import React ,{useState,useEffect}from 'react';
import './css/AfterLoginpage.css'; // Import your custom CSS file for styling
import img from '../../assets/3.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Db from './db';
import { useTranslation,Trans } from 'react-i18next';
const AfterLoginPage = () => {
 
 const {t,i18n}=useTranslation();
  const handleButtonClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
  };
const [profileinfo,setprofileinfo] = useState('user1');
const [shippingcount,setshippingcount] = useState(1);
const [Subscriptionstatus,setsubscriptionstatus] = useState('Active');
const [amount,setamount] = useState(0);

  const [balanceInfo, setBalanceInfo] = useState([]);
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6InRvZmlxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidG9maXFtYW1tYWRvdkBtYWlsLnJ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3lzdGVtIjoiOSIsImV4cCI6MTY5MjA0NDMwMywiaXNzIjoid3d3LnRlc3QuY29tIiwiYXVkIjoid3d3LnRlc3QuY29tIn0.xjVrJI_UCPLleOlVvP8flUDqS3hfRGLYOaL8qlHbXOo';

  const fetchBalanceInfo = async () => {
    try {
      const response = await fetch("/api/GetBalanceInfo", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      console.log('data:',data)
      //setBalanceInfo(data);

      // setprofileinfo(data.profileinfo)
      // setsubscriptionstatus(data.Subscriptionstatus)
      // setamount(data.amount)
      // setshippingcount(data.shippingcount)

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchBalanceInfo();
  }, []);



  return (
    <div className="after-login-page">
      {/* Left Container */}
      <div className='leftcontainer'>
            <Db/>
          </div>

      <div class="lright-container">
   
    <img class="banner-img" src={img} alt="Banner" />
    <div class="button-container">
    <button className="custom-button1" onClick={() => handleButtonClick('Button 1')}>
          <div className="button-content">
            <div className="button-text">
              <p><Trans i18nKey="description.afterloginpart1">Profile:</Trans></p>
              <p>{profileinfo}</p>
            </div>
            <div className="button-icon">
              <AccountCircleIcon/>
            </div>
          </div>
        </button>

        <button className="custom-button1" onClick={() => handleButtonClick('Button 4')}>
          <div className="button-content">
            <div className="button-text">
              <p><Trans i18nKey="description.afterloginpart2">Shipping Count:</Trans></p>
              <p>{shippingcount}</p>
            </div>
            <div className="button-icon">
              <LocalShippingIcon />
            </div>
          </div>
        </button>

        <button className="custom-button1" onClick={() => handleButtonClick('Button 2')}>
          <div className="button-content">
            <div className="button-text">
              <p><Trans i18nKey="description.afterloginpart3">Subscription status:</Trans></p>
              <p>{Subscriptionstatus}</p>
            </div>
            <div className="button-icon">
              <SubscriptionsIcon />
            </div>
          </div>
        </button>

        <button className="custom-button1" onClick={() => handleButtonClick('Button 3')}>
          <div className="button-content">
            <div className="button-text">
              <p><Trans i18nKey="description.afterloginpart4">Balance:</Trans></p>
              <p>{amount}</p>
            </div>
            <div className="button-icon">
              <AttachMoneyIcon />
            </div>
          </div>
        </button>
    </div>
  </div>


    </div>
  );
};

export default AfterLoginPage;
