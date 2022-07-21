import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart.js";



const Header=()=>{
    return(

<div className="ui fixed menu">
        <div className="ui container center">
        <a href="/">   
        <h2>FakeShop</h2>
        </a>
        <div className="menu">
            <a href="/cart">
            <h3>Cart</h3>
          </a>
          <a href="/about">
            <h3>About</h3>
        </a>
                 
        </div>
        </div>
</div>


    )
};


export default Header;