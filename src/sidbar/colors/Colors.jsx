import React from 'react'
import './colors.css'
import Input from '../../components/Input'

const Colors = ({ handleChange }) => {
  return (
    <div className='color'>
      <h2 className="sidebar-title color-title">Colors</h2>

      <label className='sidebar-label-container'>
        <input type="radio" onChange={handleChange} value='' name='test3' />
        <span className="checkmark all"></span>All
      </label>


      <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='ttest3'
        color='black'
      />

      <Input
        handleChange={handleChange}
        value='blue'
        title='Blue'
        name='ttest3'
        color='blue'
      />

      <Input
        handleChange={handleChange}
        value='red'
        title='Red'
        name='ttest3'
        color='red'
      />

      <Input
        handleChange={handleChange}
        value='green'
        title='Green'
        name='ttest3'
        color='green'
      />

      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value='white'
          name='ttest3' />
        <span className="checkmark" style={{ background: 'white', border: '2px solid black' }}></span> white
      </label>

    </div>
  )
}

export default Colors