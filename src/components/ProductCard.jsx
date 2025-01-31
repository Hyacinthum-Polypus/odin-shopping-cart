const ProductCard = ({product, addToCart}) => {
    return (
        <div className="Product">
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <h4>{product.category}</h4>
            <p>{product.description}</p>
            <img src={product.image} alt={`${product.title}`} />
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;