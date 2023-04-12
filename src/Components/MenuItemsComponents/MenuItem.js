import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const MenuItem = ({ menuItem }) => {

    const dispatch = useDispatch();

    return (
        <div className="menu-item">
            <img src={`${menuItem.img}.jpg`} alt="menu item" width="300px"/>
            <h3 className="menu-item-name">{menuItem.name}</h3>
            <p className="menu-item-price">${menuItem.price}</p>
            <button className="add-btn" onClick={() => dispatch(addToCart(menuItem))}>Add to cart</button>
        </div>
    )
}

export default MenuItem;