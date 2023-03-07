import React from 'react';

function Button({num, btnPressed, style}) {

  return (
    
    <button 
      className='btn' 
      style = {style}
      value={num.value} 
      onClick={() => {btnPressed(num.value, num.type)}}
    >
      {num.value}
    </button>
  )
}

export default Button;