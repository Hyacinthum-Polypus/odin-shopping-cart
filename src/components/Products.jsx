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
        <div id="Products">
            {productsJSX}
        </div>
    )
}

export default Products