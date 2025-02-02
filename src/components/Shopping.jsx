import NavBar from './NavBar'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'
import '../styles/Shopping.css'

const Shopping = () => {
    return (
        <div id="shopping">
            <h1>Shopping Page</h1>
            <Products />
            <ShoppingCart />
        </div>
    )
}

export default Shopping