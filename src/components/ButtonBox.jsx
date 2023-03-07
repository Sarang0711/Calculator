import React from 'react';
import Button from './Button';
import BtnData from '../BtnData';
function ButtonBox({btnPressed}) {
  
  function mapping(i) {
   
    const equateStyles = {
      backgroundColor: 'orange',
      width: '90px'
    }
    return (
            <Button 
              key = {i.id}
              num = {i}
              btnPressed = {btnPressed}
              style = {i.type === 'equate'? equateStyles: null}
            />)
  }
  return (
    <div className='btn-group'>
    {BtnData.map(mapping)}
    </div>
  )
}

export default ButtonBox