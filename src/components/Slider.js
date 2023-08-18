import React from 'react'
import Marquee from 'react-fast-marquee'
import Logo1 from '../assets/paymes-logo.svg'
import Logo2 from '../assets/brand2.jpeg'
import Logo3 from '../assets/brand3.png'
import Logo4 from '../assets/brand4.jpeg'
import Logo5 from '../assets/brand5.jpeg'
import './Slider.css'
import { Trans } from 'react-i18next';

function Slider() {

  // const data = [
  //   {
  //     id: 1,
  //     name: 'titel 1',
  //     image: <img width={70} height={70} src={Logo1} alt="logo" />,
  //   },
  //   {
  //     id: 1,
  //     name: 'titel 1',
  //     image: <img width={70} height={70} src={Logo2} alt="logo" />,
  //   },
  //   {
  //     id: 1,
  //     name: 'titel 1',
  //     image: <img width={70} height={70} src={Logo3} alt="logo" />,
  //   },
  //   {
  //     id: 1,
  //     name: 'titel 1',
  //     image: <img width={70} height={70} src={Logo4} alt="logo" />,
  //   },
  // ]
  return (
    <div className="main1">
      <h3><Trans i18nKey="description.homepart7" >PARTNERS</Trans></h3>
      <Marquee>
        <div className="logos">
          <img src={Logo1} alt="logo" />
        </div>
        <div className="logos">
          <img src={Logo1} alt="logo" />
        </div>
        <div className="logos">
          <img src={Logo1} alt="logo" />
        </div>
        <div className="logos">
          <img src={Logo1} alt="logo" />
        </div>
        {/* <div className="logos">
          <img src={Logo5} alt="logo" />
        </div> */}
      </Marquee>
  
    </div>
  )
}

export default Slider
