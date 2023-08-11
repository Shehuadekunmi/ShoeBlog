import React from 'react'
import './sidebar.css'
import {BsCart4} from 'react-icons/bs'
import Category from './category/Category'
import Price from './price/price'
import Color from './colors/Colors'


const Sidebar = ({handleChange}) => {
 
  return (
    <>

    <section className="sidebar">
        <div className="logo-container">
            <h1> <BsCart4/> </h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>


    </section>

    </>
  )
}

export default Sidebar