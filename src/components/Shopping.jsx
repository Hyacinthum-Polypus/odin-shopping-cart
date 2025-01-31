import NavBar from './NavBar'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'

const Shopping = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, {...product, key:crypto.randomUUID()}]);
    }

    return (
        <>
            <NavBar />
            <h1>Shopping Page</h1>
            <Products addToCart={addToCart}/>
            <h1>Shopping Cart</h1>
            <ShoppingCart cartItems={cartItems}/>
        </>
    )
}

export default Shopping