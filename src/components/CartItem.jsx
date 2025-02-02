import { useState } from 'react'

const CartItem = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="cart-item">
            <h4 className="title">{product.title}</h4>
            <h4 className="price">Price: ${product.price}</h4>
            <label htmlFor={"quantity-input-" + product.key}>Quantity: </label>
            <input 
                id={"quantity-input-" + product.key} 
                type="number"
                value={quantity}
                min={1}
                onChange={(event) => setQuantity(Number(event.target.value))}
            />
            <div class="quantity-buttons">
                <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>&lt;</button>
                <button onClick={() => setQuantity(quantity + 1)}>&gt;</button>
            </div>
        </div>
    )
}

export default CartItem;