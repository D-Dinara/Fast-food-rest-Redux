import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import GetTotal from "./GetTotal";


const Cart = () => {
    const cartItems = useSelector(getCartItems);

    return (
        <div className="cart">
            <Link className="home-link" to="/"><h1>BEST BURGERS IN TOWN</h1></Link>
            <h2 className="your-cart">Your cart:</h2>
            {cartItems.map(cartItem =>  <CartItem cartItem ={cartItem} />)}
            <h3 className="total">Quantity of portions: {GetTotal().totalQuantity}</h3>
            <h3 className="total">Total price: ${GetTotal().totalPrice.toFixed(2)}</h3>
        </div>
    )
}

export default Cart;