import useProducts from "../hooks/useProducts"
import ProductCard from "./ProductCard";
import "../styles/Products.css"

const Products = () => {
    const products = useProducts();

    const productsJSX = products.map(product => {
        return (
            <ProductCard 
                product={product}
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