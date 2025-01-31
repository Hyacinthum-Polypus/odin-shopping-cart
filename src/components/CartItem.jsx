import { useState } from 'react'

const CartItem = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="cart-item">
            <h4>{product.title}</h4>
            <h4>Price: {product.price}</h4>
            <label htmlFor={"quantity-input-" + product.key}>quantity</label>
            <input 
                id={"quantity-input-" + product.key} 
                type="number"
                value={quantity}
                min={1}
                onChange={(event) => setQuantity(Number(event.target.value))}
            />
            <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>&lt;</button>
            <button onClick={() => setQuantity(quantity + 1)}>&gt;</button>
        </div>
    )
}

export default CartItem;