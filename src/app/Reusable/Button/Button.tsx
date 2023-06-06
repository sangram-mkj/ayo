import React from 'react';
import './button.css';

function Button({title}: any): any {
  return (
    <>
        <button className='btn'>{title}</button>
    </>
  )
}

export default Button