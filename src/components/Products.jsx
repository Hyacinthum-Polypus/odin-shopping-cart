import useProducts from "./useProducts"
import ProductCard from "./ProductCard";

const Products = () => {
    const products = useProducts();

    const productsJSX = products.map(product => {
        return (
            <ProductCard 
                title={product.title}
                price={product.pice}
                category={product.category}
                image={product.image}
                description={product.description}
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