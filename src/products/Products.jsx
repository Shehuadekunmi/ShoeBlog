import React from 'react'
import './products.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'
import Card from '../components/Card'

const Products = () => {
  return (
    <div>

      <section className="card-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
        

      </section>
    </div>
  )
}

export default Products