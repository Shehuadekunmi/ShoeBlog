import React from 'react'
import './recommended.css'
import Button from '../components/Button'

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <div className="one">
            <Button onClickHandler={handleClick} value='' title='All Products' /> <br /> <br />
            <Button onClickHandler={handleClick} value='Adidas' title='Adidas' /> <br /> <br />
          </div>
          <div className='two'>
            <Button onClickHandler={handleClick} value='Nike' title='Nike' /> <br /> <br />
            <Button onClickHandler={handleClick} value='Puma' title='Puma' /> <br /> <br />
            <Button onClickHandler={handleClick} value='Vans' title='Vans' /> <br /> <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default Recommended