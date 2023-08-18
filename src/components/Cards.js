import React, { useEffect, useState } from 'react'
import {  FaHandshake } from 'react-icons/fa'
import './Cards.css'
import { useTranslation, Trans } from 'react-i18next';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Truck } from 'lucide-react';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
function Cards() {
  const { i18n } = useTranslation();
  const data1 = [
    {
      id: 1,
      icons: <FaHandshake color="white" size={25} />,
      title: 'Tek Platform',
      detail:
        'Tek platformdan Özbekistan, Azerbaycan, Kırgızistan, Körfez ülkelerine siparişlerinizi göndermek için sadece Kavvaya kayıt olmanız yeterli.',
      link: 'Detailed information',
    },
    {
      id: 2,
      icons: <ShoppingBagIcon color="white" size={25} />,
      title: 'E-Ticaret yapan girişimciler',
      detail:
        'Yurtdışı siparişleriniz için gönderi oluştur ve hemen gönder.',
      link: 'Detailed information',
    },
    {
      id: 3,
      icons: <AttachMoneyIcon color="white" size={25} />,
      title: 'Uygun Fiyatlar',
      detail:
        'Ülke bazlı indirimli ve uygun fiyatlı yurtdışı gönderimi sağlıyoruz.',
      link: 'Detailed information',
    },
    {
      id: 4,
      icons: <PublicOutlinedIcon color="white" size={25} />,
      title: 'Alıcı Ülkesine Göre Firmalar',
      detail:
        'Alıcı ülkesine göre en ucuz ve en hızlı kargolama yöntemini söylüyoruz. Yapay zeka destekli en ideal kargo firmasını sizin için seçiyoruz.',
      link: 'Detailed information',
    },
    {
      id: 5,
      icons: <Truck color="white" size={25} />,
      title: 'Hızlı Gönderi Deneyimi',
      detail:
        'E-ticaret sisteminizden sipariş ve adres bilgileri otomatik çekiyoruz',
      link: 'Detailed information',
    },
    {
      id: 6,
      icons: <FaHandshake color="white" size={25} />,
      title: 'Bulut Gönderi Platformu',
      detail:
        'Hızlı, verimli ve esnek altyapımızın gücünü keşfedin',
      link: 'Detailed information',
    },
  
  ]
  
  const data2 = [
    {
      id: 1,
      icons: <FaHandshake color="white" size={25} />,
      title: 'Unique Platform',
      detail:
        'To send your orders to Uzbekistan, Azerbaijan, Kyrgyzstan and Gulf countries from a single platform, you only need to register with Kavvay.',
      link: 'Detailed information',
    },
    {
      id: 2,
      icons: <ShoppingBagIcon color="white" size={25} />,
      title: 'E-Commerce Entrepreneurs',
      detail:
        'Create a shipment for your overseas orders and send it now.',
      link: 'Detailed information',
    },
    {
      id: 3,
      icons: <AttachMoneyIcon color="white" size={25} />,
      title: 'Affordable Prices',
      detail:
        'We provide country-based discounted and affordable international shipping.',
      link: 'Detailed information',
    },
    {
      id: 4,
      icons: <PublicOutlinedIcon color="white" size={25} />,
      title: 'Companies by Recipient Country',
      detail:
        'We say the cheapest and fastest shipping method according to the recipient country. We choose the most ideal cargo company supported by artificial intelligence for you.',
      link: 'Detailed information',
    },
    {
      id: 5,
      icons: <Truck color="white" size={25} />,
      title: 'Fast Shipping Experience',
      detail:
        'We automatically pull order and address information from your e-commerce system.',
      link: 'Detailed information',
    },
    {
      id: 6,
      icons: <FaHandshake color="white" size={25} />,
      title: 'Cloud Delivery Platform',
      detail:
        'Discover the power of our fast, efficient and flexible infrastructure.',
      link: 'Detailed information',
    },
  
  ]

  const [data,setdata]=useState(data1)

 useEffect(()=>{

  if ( i18n.language === 'en'){
    setdata(data2)
  }
  else{
    setdata(data1)
  }
  
 },[i18n.language])

  return (
    <div className="cards_main">
      <h3><Trans i18nKey="description.homepart12">OUR ADVANTAGES</Trans></h3>
      <div className='card_main_flex' >
        {data.map((item, index) => {
          return (
            <>
              <div className="cardbg">
                <div className="icon">
                  <h3>{item.icons}</h3>
                </div>
                <div className="text-logo">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <p id="link"></p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
