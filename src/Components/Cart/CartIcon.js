import cartIcon from "./cartIcon-img.png";
import { Link } from "react-router-dom";
import GetTotal from "./GetTotal";

const CartIcon = () => {

    return (
        <div className="cart-icon-container">
            <Link className="link" to="/cart">
            <img className="cart-icon" src={cartIcon} alt="cart icon"/>
            <p className="cart-icon-quantity">{GetTotal().totalQuantity}</p>
            <p className="cart-icon-price">${GetTotal().totalPrice.toFixed(2)}</p>
            </Link>
        </div>
    )
}

export default CartIcon;