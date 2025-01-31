import CartItem from "./CartItem";

const ShoppingCart = ({cartItems}) => {
    return (
        <div id="shppping-cart" data-testid="shopping-cart">
            {
                cartItems.map(item => {
                    return <CartItem key={item.id}/>
                })
            }
        </div>
    )
}

export default ShoppingCart;