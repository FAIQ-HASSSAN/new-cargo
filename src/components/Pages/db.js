import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './css/da.css'
import { Trans } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import { Home} from 'lucide-react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Truck } from 'lucide-react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { CircleDollarSign } from 'lucide-react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Container } from 'lucide-react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { ChevronDownSquare } from 'lucide-react';
import { MenuSquare } from 'lucide-react';
function Db() {

  
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleProfileClick = () => {
      setShowSubMenu(!showSubMenu);
    };

    const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const closeMenu = () => {
    setShowMenu(false);
  }; 
  return (
    <div className="page">
      <div className="left-container">
        <div className="menu-icon" onClick={toggleMenu}>
             <MenuSquare/>    
        </div>
        <ul className={`main-menu ${showMenu ? 'show' : ''}`}>
          <NavLink to="/"  onClick={toggleMenu}> <li><Home className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart1"> Home Page</Trans></li> </NavLink>
          <li className="dropdown" onClick={handleProfileClick}>
          <PersonOutlineIcon className="MuiSvgIcon-root"/>  <Trans i18nKey="description.menupart2">Profile</Trans>
            {showSubMenu && (
              <ul className="sub-menu">
                <NavLink to="/afterSignupPage"><li onClick={toggleMenu}><ManageAccountsIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart3">Settings</Trans></li></NavLink>
                <NavLink to="/invoiceaddress" ><li onClick={toggleMenu}><LocationOnOutlinedIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart4">Invoice Addresses</Trans></li> </NavLink>
                <NavLink to="/accountpassword"><li onClick={toggleMenu}><LockResetOutlinedIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart5">Account</Trans></li> </NavLink>
                <NavLink to="/invoice">  <li onClick={toggleMenu}><ReceiptIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart6">Invoices</Trans></li> </NavLink>
              </ul>
            )}
          </li>
          <NavLink to='/Createshipment'>
            <li> <Container className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart7">Create Shipping</Trans></li>
          </NavLink>
          <NavLink to="/calculateprice" onClick={toggleMenu}><li onClick={toggleMenu}> <AttachMoneyIcon className="MuiSvgIcon-root"/><Trans i18nKey="description.menupart8">Calculate Price</Trans> </li> </NavLink>
          <NavLink to="/shipping"><li onClick={toggleMenu}><Truck className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart9"> Shippings</Trans> </li> </NavLink>
          <NavLink to="/Payment" onClick={closeMenu}><li> <CircleDollarSign className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart10"> Payment </Trans></li> </NavLink>
          <NavLink to='/FAQ' onClick={closeMenu}> <li><LiveHelpIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart11"> FAQ </Trans></li> </NavLink>
          <NavLink to='/announcement' onClick={closeMenu}>  <li><AnnouncementIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart12">Announcements</Trans></li> </NavLink>
          <NavLink to='/support' onClick={closeMenu}> <li><HelpOutlineIcon className="MuiSvgIcon-root"/> <Trans i18nKey="description.menupart13">Support</Trans></li> </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Db