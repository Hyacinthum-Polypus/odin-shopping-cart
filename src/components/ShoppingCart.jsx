import CartItem from "./CartItem";
import ShoppingContext from '../contexts/ShopContext'
import { useContext } from 'react'

const ShoppingCart = () => {
    const { cartItems } = useContext(ShoppingContext);

    return (
        <div id="shppping-cart" data-testid="shopping-cart">
            <h1>Shopping Cart</h1>
            {
                cartItems.map(item => <CartItem key={item.key} product={item} />)
            }
            <button>Checkout</button>
        </div>
    )
}

export default ShoppingCart;