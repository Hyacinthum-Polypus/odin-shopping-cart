import useProducts from "./useProducts"
import ProductCard from "./ProductCard";

const Products = ({addToCart}) => {
    const products = useProducts();

    const productsJSX = products.map(product => {
        return (
            <ProductCard 
                product={product}
                addToCart={addToCart}
                key={product.id}          
            />
        )
    })

    return (
        <div id="products">
            <h1>Products</h1>
            {productsJSX}
        </div>
    )
}

export default Products