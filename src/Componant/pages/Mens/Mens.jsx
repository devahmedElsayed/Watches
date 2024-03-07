import React from 'react';
import cat1 from '../../../Assets/men-1.jpg';
import cat2 from '../../../Assets/men-2.jpg';
import cat3 from '../../../Assets/men-3.jpg';
import cat4 from '../../../Assets/men-4.jpg';
import cat5 from '../../../Assets/men-5.jpg';
import cat6 from '../../../Assets/men-6.jpg';
import cat7 from '../../../Assets/men-7.jpg';
import cat8 from '../../../Assets/men-8.jpg';
import cat9 from '../../../Assets/men-9.jpg';
import cat10 from '../../../Assets/men-10.jpg';
import cat11 from '../../../Assets/men-11.jpg';
import cat12 from '../../../Assets/men-12.jpg';
import './Mens.css';
import { CiHeart } from "react-icons/ci";
import { MdOutlineWatch } from "react-icons/md";

import { Container } from 'react-bootstrap';
const Mens = () => {

  return (  
    <div className='men'>
      <Container>
       <div className='men-category '>
          <div className="categ1">
            <img src={cat1} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
            </div>
          </div>
          <div className="categ1">
            <img src={cat2} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat3} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat4} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat5} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat6} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat7} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat8} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat9} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
          <img src={cat10} alt="" /> 

          <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat11} alt="" /> 
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
          <div className="categ1">
            <img src={cat12} alt="" /> 
            
            <div className='cat_bode'>
            <h3>lorem 1</h3>
            <p className='know'>Watches</p>
            <p>5000$</p>
            <div className='buy'>
            <button> <MdOutlineWatch /> ADD TO CART</button>
            <CiHeart className='love' />
            </div>
                        </div>
          </div>
       </div>
       </Container>
    </div>
  );
}

export default Mens;