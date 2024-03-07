import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componant/Footer/Footer';
import Home from './Componant/pages/Home'
import Mens from './Componant/pages/Mens/Mens';
import Womens from './Componant/pages/Womens/Womens';
import Brands from './Componant/pages/Brands/Brands';
import Navs from './Componant/Navbar/Navbar';
import Sale from './Componant/Sale/Sale';
function App() {
  return (
      <BrowserRouter>
          <Navs/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Mens' element={<Mens category='Mens' />} />
          <Route path='/Womens' element={<Womens category='Womens' />} />
          <Route path='/Brands' element={<Brands category='Brands' />} />
          <Route path='/Sale' element={<Sale category='SALE' />} />
        </Routes>
      
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
