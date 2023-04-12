import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/cartSlice";

const ChangeQuantity = ({ cartItem }) => {
    
    const dispatch = useDispatch();
    const cartItemId = cartItem.id;

    return (
        <div className="quantity-container">
            <button className="qty-btn" onClick={() => dispatch(decrementQuantity(cartItemId))}>-</button>
            <span className="cart-qty">{cartItem.quantity}</span>
            <button className="qty-btn" onClick={() => dispatch(incrementQuantity(cartItemId))}>+</button>
        </div>
    )
}

export default ChangeQuantity;