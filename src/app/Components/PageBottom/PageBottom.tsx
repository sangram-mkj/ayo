import React from 'react';
import './pagebottom.css';

function PageBottom() {
  return (
    <div className='main'>
        <div className="left">
          <div className="textBox">
            <div className="headerText">
              <p>Ayopark</p>
            </div>
            <div className="description">
              <p>LEFT</p>
            </div>           
          </div>          
        </div>
        <div className="right">
          <p>RIGHT</p>
        </div>
    </div>
  )
}

export default PageBottom