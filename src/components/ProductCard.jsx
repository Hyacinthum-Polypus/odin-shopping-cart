import { useContext } from 'react'
import ShopContext from '../contexts/ShopContext'

const ProductCard = ({product}) => {
    const { addToCart } = useContext(ShopContext);


    return (
        <div className="product">
            <h4>{product.title}</h4>
            <h4>Price: ${product.price}</h4>
            <h4>{product.category}</h4>
            <p>{product.description}</p>
            <img src={product.image} alt={`${product.title}`} />
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;