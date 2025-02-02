import NavBar from './NavBar'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'
import '../styles/Shopping.css'

const Shopping = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, {...product, key:crypto.randomUUID()}]);
    }

    return (
        <div id="shopping">
            <h1>Shopping Page</h1>
            <Products addToCart={addToCart}/>
            <ShoppingCart cartItems={cartItems}/>
        </div>
    )
}

export default Shopping