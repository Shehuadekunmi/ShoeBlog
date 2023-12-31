import React from 'react'
import './nav.css'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

const Nav = ({handleInputChange}) => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <input type="text" placeholder='Enter your search' className= 'search-input' handleInputChange={handleInputChange}/>
        </div>

        <div className="profile-container">
          <a href="#"> <FiHeart className='nav-icons'/></a>

          <a href="#"><AiOutlineShoppingCart className='nav-icons'/></a>

          <a href="#"><AiOutlineUserAdd className='nav-icons'/></a>
        </div>
      </nav>
    </div>
  )
}

export default Nav