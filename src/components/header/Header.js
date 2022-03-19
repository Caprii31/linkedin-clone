import React from 'react'
import image from '../../utils/LinkedIn_logo_initials.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from './LinkIcon';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '../../utils/my-img.jpg'



function Header() {
  return (
    <div className="header">
      <div className="left__header">
        <img src={image} alt="" />
        <div className="header__search">
          <SearchIcon fontSize="small" />
          <input type="text" value='search' />
        </div>
      </div>

      <div className="right__header">
        <LinkIcon title="home" Icon={HomeIcon} />    
        <LinkIcon title="my network" Icon={PeopleIcon}/>    
        <LinkIcon title="jobs" Icon={WorkIcon}/>    
        <LinkIcon title="messaging" Icon={SmsIcon}/>    
        <LinkIcon title="notification" Icon={NotificationsIcon  }/> 
        <LinkIcon title="me" Avatar={Avatar} />      
      </div>
    </div>
  )
}

export default Header