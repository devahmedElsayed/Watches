import React from 'react';
import './Brands.css';
import { CiHeart } from "react-icons/ci";
import logo1 from '../../../Assets/omega.jpg'
import logo2 from '../../../Assets/casio.jpg'
import logo3 from '../../../Assets/logo3.png'
import logo4 from '../../../Assets/logo4.png'
import logo5 from '../../../Assets/logo5.png'
import { Container } from 'react-bootstrap';
import omega from '../../../Assets/omega.avif'
import casio from '../../../Assets/casio.avif'
import rolex from '../../../Assets/rolex.avif'
import daniel from '../../../Assets/daniel.jpg'
import fossil from '../../../Assets/fossil.jpg'


const Brands = () => {
  return (
    <div className='barnds'>
      <Container>
      <div className='mainBrand'>
        
      <div className='brand1'>
        <div className='logoBrand'>
          <img src={logo1} alt="" />
        </div>
        <div className='caption'>

        <h2>OMEGA</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde molestiae aut. Hic sed quod, deserunt voluptas quos libero quidem optio repudiandae esse quas vel quam assumenda ea cupiditate aut.</p>
        </div>
        <div className='prod'>
          <p>1 Product</p>
          <button className='btn-prod'>VIEW PRODUCTS</button><p></p>
        </div>
        <div>
        <img src={omega} alt="" />
        <p className='salry'> PRICE : 7000$</p>
        <CiHeart className='love' />
        <button  className='btn-prod'>ADD TO CART</button>

        </div>
      </div>

      {/*  */}
<hr />
      
      <div className='brand1'>
        <div className='logoBrand'>
        <img src={logo2} alt="" />

        </div>
        <div className='caption'>
        <h2>CASIO</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est molestias illo sed mollitia ab odit. Temporibus neque commodi possimus, alias minus eos quisquam reiciendis, repudiandae obcaecati molestiae fugiat quo. Ab!</p>
        </div>
        <div className='prod'>
        <p>1 Product</p>
        <button className='btn-prod'>VIEW PRODUCTS</button><p></p>
        </div>
        <div>
        <img src={casio} alt="" />
        <p className='salry'> PRICE : 7000$</p>
        <CiHeart className='love' />
        <button className='btn-prod'>ADD TO CART</button>

        </div>
      </div>

      {/*  */}
      <hr />
      <div className='brand1'>
        <div className='logoBrand'>
        <img src={logo3} alt="" />

        </div>
        <div className='caption'>

        <h2>ROLEX</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde soluta aliquam omnis, officiis velit! Perspiciatis, deleniti magni nemo aspernatur neque labore reiciendis error et delectus reprehenderit. Quos, ipsam tenetur.</p>
       </div>
       <div className='prod'>
       <p>1 Product</p>
       <button className='btn-prod'>VIEW PRODUCTS</button><p></p>
        </div>
        <div>
        <img src={rolex} alt="" />
        <p className='salry'> PRICE : 7000$</p>
        <CiHeart className='love' />
        <button  className='btn-prod'>ADD TO CART</button>

        </div>
      </div>

      {/*  */}
      <hr />
      <div className='brand1'>
        <div className='logoBrand'>
        <img src={logo4} alt="" />

        </div>
        <div className='caption'>

        <h2>DANIEL KLEIN</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt recusandae corrupti sed cum saepe qui explicabo, molestias vel aperiam quos culpa repellat eaque. Placeat in optio debitis ullam nobis.</p>
        </div>
        <div className='prod'>
        <p>1 Product</p>
          <button className='btn-prod'>VIEW PRODUCTS</button><p></p>
        </div>
        <div>
        <img src={daniel} alt="" />
        <p className='salry'> PRICE : 7000$</p>
        <CiHeart className='love' />
        <button  className='btn-prod'>ADD TO CART</button>

        </div>
      </div>

      {/*  */}
      <hr />
      <div className='brand1'>
        <div className='logoBrand'>
        <img src={logo5} alt="" />

        </div>
        <div className='caption'>

        <h2>FOSSIL</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi accusamus quam maiores eos, qui corrupti commodi inventore assumenda, optio debitis quas? Alias sunt nemo odio nisi hic veritatis non accusantium.</p>
        </div>
        <div className='prod'>
        <p>1 Product</p>
        <button className='btn-prod'>VIEW PRODUCTS</button><p></p>
        </div>
        <div>
        <img src={fossil} alt="" />
        <p className='salry'> PRICE : 7000$</p>
        <CiHeart className='love' />
        <button  className='btn-prod'>ADD TO CART</button>

        </div>
      </div>

      {/*  */}

      </div>
      </Container>
    </div>
  )
}

export default Brands