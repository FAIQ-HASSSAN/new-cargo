import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Logo from '../assets/logo.PNG'
import { useTranslation, Trans } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
function NavBar({ onContactClick }) {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const { t, i18n } = useTranslation();
  const [click, setClick] = useState(false)
const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const handleClick = () => setClick(!click)

  const handleDropdownChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setShowLanguageOptions(false);
  };
  
  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prevState) => !prevState);
  };
  

  const availableLanguages = {
    en: 'En',
    tr: 'TR',
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        
          <NavLink exact to="/" className="nav-logo"   
               >
          <img src={Logo} alt=""/>
          
          </NavLink>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <Trans  i18nKey="description.navpart1"> Hakkımızda </Trans>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/edelivery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             <Trans i18nKey="description.navpart2"> Tıkla Gönder </Trans>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/homecalprice"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >                
 <Trans i18nKey="description.navpart3">Fiyatı Hesapla</Trans>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                smooth
                spy
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
            <Trans i18nKey="description.navpart4">  İletişim </Trans> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             <Trans i18nKey="description.navpart5"> Giriş yapmak </Trans>
              </NavLink>
            </li>
            <li onClick={handleClick}>
             <NavLink to="/register"> <button className="btn"><Trans i18nKey="description.navpart6">Kayıt olmak </Trans></button> </NavLink>
            </li>
            <li className="nav-item dropdown-item">
    <div className="language-dropdown" onClick={toggleLanguageOptions}>
      <LanguageIcon />
      <span className="language-name">{availableLanguages[selectedLanguage]}</span>
    </div>
    {showLanguageOptions && (
      <ul className="language-menu">
        {Object.keys(availableLanguages).map((languageCode) => (
          <li key={languageCode}>
            <button
              className="language-option"
              onClick={() => handleDropdownChange({ target: { value: languageCode } })}
            >
              <span className="language-name">{availableLanguages[languageCode]}</span>
            </button>
          </li>
        ))}
      </ul>
    )}
  </li>
            </ul>

            {/* <div className="nav-menu">
        <li className="nav-item dropdown-item">
          <div className="language-dropdown" onClick={toggleLanguageOptions}>
            <LanguageIcon />
            <span className="language-name">{availableLanguages[selectedLanguage]}</span>
          </div>
          {showLanguageOptions && (
            <ul className="language-menu">
              {Object.keys(availableLanguages).map((languageCode) => (
                <li key={languageCode}>
                  <button
                    className="language-option"
                    onClick={() => handleDropdownChange({ target: { value: languageCode } })}
                  >
                    <span className="language-name">{availableLanguages[languageCode]}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      </div> */}



            {/* <li className="nav-item dropdown-item">
             <LanguageIcon/>
              <select value={dropdownValue} onChange={handleDropdownChange} className="custom-dropdown">
                <option  value="en">en</option>
                <option value="tr">tr</option>
              </select>
  </li> */}
           
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
