import { useSelector } from "react-redux";
import CartIcon from "../Cart/CartIcon";
import { getCartItems } from "../../redux/cartSlice";

const Heading = () => {
    const cartItems = useSelector(getCartItems);
    return (
        <div className='heading'>
            <h1>BEST BURGERS IN TOWN</h1>
            {cartItems.length > 0 ? <CartIcon /> : null}
        </div>
    )
}

export default Heading;