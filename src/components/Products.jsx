import useProducts from "../hooks/useProducts"
import useFetchedData from "../hooks/useFetchedData"
import ProductCard from "./ProductCard";
import "../styles/Products.css"
import { useState } from 'react'

const Products = () => {
    const [category, setCategory] = useState('none');
    const products = useProducts(category);

    const {data:categories, loading, error} = useFetchedData("https://fakestoreapi.com/products/categories");

    const productsJSX = products.map(product => {
        return (
            <ProductCard 
                product={product}
                key={product.id}          
            />
        )
    })

    let categoriesJSX = [];

    if(!loading && !error)
        categoriesJSX = categories.map(category => {
            return (
                <button onClick={() => setCategory(category)}>{category}</button>
            )
    })

    return (
        <div id="products">
            <h1>Products</h1>
            <div className="categories">
                <button onClick={() => setCategory('none')}>none</button>
                {categoriesJSX}
            </div>
            {productsJSX}
        </div>
    )
}

export default Products