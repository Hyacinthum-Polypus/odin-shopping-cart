import ProductController from './ProductController'

const Products = () => {
    const products = ProductController.getProducts().map(product => {
        return (
            <div className="Product" key={product.id}>
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
                <img src={product.image} alt={`${product.title}`} />
            </div>
        )
    })

    return (
        <div id="Products">
            {products}
        </div>
    )
}

export default Products