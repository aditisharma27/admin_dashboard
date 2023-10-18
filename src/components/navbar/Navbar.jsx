import React from 'react'
import './navbar.scss'
import WavingHand from '@mui/icons-material/WavingHandTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="items">Hello Shahrukh <WavingHand className='wave'/></div>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='search' />
        </div>
      </div>
    </div>
  )
}

export default Navbar