const ProductCard = ({title, price, category, description, image}) => {

    return (
        <div className="Product">
            <h4>{title}</h4>
            <h4>{price}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <img src={image} alt={`${title}`} />
        </div>
    )
}

export default ProductCard;