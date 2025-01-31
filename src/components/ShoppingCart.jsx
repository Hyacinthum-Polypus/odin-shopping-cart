import CartItem from "./CartItem";

const ShoppingCart = ({cartItems}) => {
    return (
        <div id="shppping-cart" data-testid="shopping-cart">
            {
                cartItems.map(item => <CartItem key={item.key} product={item} />)
            }
            <button>Checkout</button>
        </div>
    )
}

export default ShoppingCart;