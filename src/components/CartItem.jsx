import { useState } from 'react'

const CartItem = ({product, quantity, setQuantity}) => {
    //const [quantity, setQuantity] = useState(1)


    return (
        <div className="cart-item">
            <h4 className="title">{product.title}</h4>
            <h4 className="price">Price: ${product.price}</h4>
            <label htmlFor={"quantity-input-" + product.key}>Quantity: </label>
            <input 
                id={"quantity-input-" + product.key} 
                type="number"
                value={product.quantity}
                min={1}
                onChange={(event) => setQuantity(product.key, Number(event.target.value))}
            />
            <div className="quantity-buttons">
                <button onClick={() => product.quantity > 1 ? setQuantity(product.key, product.quantity - 1) : null}>&lt;</button>
                <button onClick={() => setQuantity(product.key, product.quantity + 1)}>&gt;</button>
            </div>
        </div>
    )
}

export default CartItem;