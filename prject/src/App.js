
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';
import ProductComponent from './containers/ProductComponent.js';
import Cart from './containers/Cart.js';
import About from './containers/About.js';
import CartListing from './containers/CartListing.js';
import Button from '@mui/material/Button';


function App() {
  return (
   
    <Router>
      <Header/>
  <Routes>
    <Route path="/" element={<ProductListing/>}></Route>
    <Route path="/product/:productId" element={<ProductDetail/>}></Route>
    <Route path="/" element={<ProductComponent/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/cart" element={<CartListing/>}></Route>
  </Routes>


    </Router>


   
  );
}

export default App;
