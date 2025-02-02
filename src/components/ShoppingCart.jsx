import CartItem from "./CartItem";
import ShoppingContext from '../contexts/ShopContext'
import { useContext, useState } from 'react'
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {
    const { cartItems, setQuantity } = useContext(ShoppingContext);

    return (
        <div id="shopping-cart" data-testid="shopping-cart">
            <h1>Shopping Cart</h1>
            <div id="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.key} product={item} setQuantity={setQuantity} />)
                }
                    <h4>Total: ${cartItems.reduce((accum, current) => {
                        return accum += current.price * current.quantity;
                    }, 0)}</h4>
                    <button id="checkout">Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCart;