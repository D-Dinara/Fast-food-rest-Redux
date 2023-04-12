import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import ChangeQuantity from "./ChangeQuantity";
const CartItem = ({ cartItem }) => {
    
    const dispatch = useDispatch();
    const cartItemId = cartItem.id;
    const cartItemTotalPrice = (cartItem.price * cartItem.quantity).toFixed(2);
  
    return (
        <div  className="cart-item">
            <div className="cart-left">
                <img className="cart-item-img" src={`${cartItem.img}.jpg`} alt="cart item" width="50px"/>
                <div>
                    <h3 className="cart-item-name">{cartItem.name}</h3>
                    <p className="cart-item-price">${cartItemTotalPrice}</p>
                </div>
            </div>
            
            <div className="cart-right">
                <ChangeQuantity cartItem={cartItem}/>  
                <span onClick={() => dispatch(removeItemFromCart(cartItemId))}>
                    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete" width="30px"/> 
                </span> 
            </div>
        </div>
    )
}

export default CartItem;