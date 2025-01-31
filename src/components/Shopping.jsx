import NavBar from './NavBar'
import Products from './Products'
import ShoppingCart from './ShoppingCart'

const Shopping = () => {

    const addToCart = () => {
        console.log("Add item to cart.");
    }

    return (
        <>
            <NavBar />
            <h1>Shopping Page</h1>
            <Products addToCart={addToCart}/>
            <ShoppingCart />
        </>
    )
}

export default Shopping