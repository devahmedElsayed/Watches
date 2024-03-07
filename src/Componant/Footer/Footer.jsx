import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className='main-footer'>
                <h2>Newsletter</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cupiditate.</p>
                <div className='inp'>
                <input type="text" name="" id="" />
                <button>SUBSCRIBE </button>
                </div>

            </div>
            <div className='list-footer '>
                <ul className='row'>
                    <li  className='col-xl-2 col-lg-2 col-md-2 col-sm-6'> PRIVACY</li>
                    <li className=' col-xl-2 col-lg-2 col-md-2 col-sm-6'>TERMS</li>
                    <li className=' col-xl-2 col-lg-2 col-md-2 col-sm-6'>SHOP</li>
                    <li className=' col-xl-2 col-lg-2 col-md-2 col-sm-6'>ABOUT</li>
                    <li className=' col-xl-2 col-lg-2 col-md-2 col-sm-6'>CONTACT</li>
                </ul>
            </div>

        </Container>
    </div>
  )
}

export default Footer