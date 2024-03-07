import React from 'react'
import './Port.css';
import pic1 from '../../Assets/port1.jpg';
import pic2 from '../../Assets/port2.jpg';
import pic3 from '../../Assets/port3.jpg';
import pic4 from '../../Assets/port4.jpg';
import pic5 from '../../Assets/port5.jpg';
import pic6 from '../../Assets/port6.jpg';
import pic7 from '../../Assets/port7.jpg';
import pic8 from '../../Assets/port8.jpg';

const Port = () => {
  return (
    <div className='port'>
        <h2>WELCOME</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <div className='pic row p-0 m-0'>
            
        <div className='img-container col-xl-3 col-lg-6 col-md-6 col-sm-6 p-0   '>
        <img src={pic1} alt="" />
        <div className='img-overlay'>
            <h3>Classic</h3>
        </div>
    </div>
    <div className='img-container col-xl-3 col-lg-6 col-md-6 col-sm-6   p-0  '>
        <img src={pic2} alt=""  />
        <div className='img-overlay'>
            <h3>Stylist</h3>
        </div>
    </div>
    <div className='img-container col-xl-3 col-lg-6 col-md-6 col-sm-6   p-0  '>
        <img src={pic3} alt=""  />
        <div className='img-overlay'>
            <h3>Sea</h3>
        </div>
    </div>             
    <div className='img- col-xl-3 col-lg-6 col-md-6 col-sm-6  p-0  '>
        <img src={pic4} alt=""  />
        <div className='img-overlay'>
            <h3>Formal</h3>
        </div>
    </div>              
    <div className='img-container col-xl-3 col-lg-6 col-md-6 col-sm-6  p-0   '>
        <img src={pic5} alt=""  />
        <div className='img-overlay'>
            <h3>Cafe</h3>
        </div>
    </div>                
    <div className='img-container col-xl-3 col-lg-6 col-md-6 col-sm-6 p-0  '>
        <img src={pic6} alt=""  />
        <div className='img-overlay'>
            <h3>Store</h3>
        </div>
    </div>               
    <div className='img-container  col-xl-3 col-lg-6 col-md-6 col-sm-6  p-0  '>
        <img src={pic7} alt=""  />
        <div className='img-overlay'>
            <h3>Couple</h3>
        </div>
    </div>    

    <div className='img-container col-xl-3 col-lg-3 col-md-6 col-sm-6  p-0  '>
        <img src={pic8} alt=""  />
        <div className='img-overlay'>
            <h3>Wedding</h3>
        </div>
    </div>
    
    
            </div>
    </div>
  )
}

export default Port