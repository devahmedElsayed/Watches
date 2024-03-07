import React from 'react';
import './Temp.css';

import Container from 'react-bootstrap/esm/Container';
const Temp = () => {
  return (               
    <div className='temp '>
        <Container>
        <div className='cards row  justify-content-center'>
            <div className='card1 col-xl-3 col-lg-3 col-md-12 col-sm-4'>
              <h2>MEN'S  <span className='sapn-temp'>WATCHES</span></h2>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='card2 col-xl-3 col-lg-3 col-md-12 col-sm-4 '>
              <h2>WOMEN'S  <span className='sapn-temp'>WATCHES</span></h2>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='card3 col-xl-3 col-lg-3 col-md-12 col-sm-4'>
              <h2>MEN'S <span className='sapn-temp'>WATCHES</span></h2>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        </Container>
    </div>

  )
}

export default Temp