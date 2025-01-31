const ProductCard = ({title, price, category, description, image, addToCart}) => {
    return (
        <div className="Product">
            <h4>{title}</h4>
            <h4>{price}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <img src={image} alt={`${title}`} />
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;