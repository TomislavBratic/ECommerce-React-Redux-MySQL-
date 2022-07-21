
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Header from './containers/Header.js';
import ProductListing from './containers/ProductListing.js';
import ProductDetail from './containers/ProductDetail.js';
import ProductComponent from './containers/ProductComponent.js';
import Cart from './containers/Cart.js';
import About from './containers/About.js';


function App() {
  return (
   <div className='App'>
    <Router>
<Header/>
  <Routes>
    <Route path="/" element={<ProductListing/>}></Route>
    <Route path="/product/:productId" element={<ProductDetail/>}></Route>
    <Route path="/" element={<ProductComponent/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>


    </Router>


   </div>
  );
}

export default App;
