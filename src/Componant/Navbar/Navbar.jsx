import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from 'react-router-dom';




const Navs = () => {
  return (
        <Navbar expand="lg " className="nav position-sticky " >
      <Container>
        <Navbar.Brand  className='nav-head' ><Link to='/'><span>W</span>ATCHES</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse id="basic-navbar-nav " className='bg-black p-4 h-75' >
          <Nav className="bbb ">
            <Nav.Link><Link to='/Mens'>MENS</Link></Nav.Link>
            <Nav.Link><Link to='/Womens' >WOMENS</Link></Nav.Link>
            <Nav.Link><Link to='/Brands'>BRANDS</Link> </Nav.Link>
            <Nav.Link><Link to='/SALE'>SALE</Link> </Nav.Link>
            <button className='login'>LOGIN</button>

        
          </Nav>       
   <div>
           <MdShoppingCartCheckout className='cart' />   
           <div className='nav-cart-cout'>0</div>
      </div>
        </Navbar.Collapse>
     
      </Container>
             

    </Navbar>
    
  )
}

export default Navs;