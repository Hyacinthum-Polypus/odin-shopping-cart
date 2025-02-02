import CartItem from "./CartItem";
import ShoppingContext from '../contexts/ShopContext'
import { useContext } from 'react'
import '../styles/ShoppingCart.css'

const ShoppingCart = () => {
    const { cartItems } = useContext(ShoppingContext);

    return (
        <div id="shopping-cart" data-testid="shopping-cart">
            <h1>Shopping Cart</h1>
            <div id="cart-items">
                {
                    cartItems.map(item => <CartItem key={item.key} product={item} />)
                }
                    <button id="checkout">Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCart;