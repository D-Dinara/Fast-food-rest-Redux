import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";

const GetTotal = () => {
   
   const cartItems = useSelector(getCartItems);
   const cartItemsPrices = [];

   cartItems.forEach(item => {
    const cartItemTotalPrice = item.price*item.quantity;
    cartItemsPrices.push(cartItemTotalPrice);
    return cartItemsPrices;
   });

   const totalPrice = cartItemsPrices.reduce((acc, cartItemsPrices) => acc += cartItemsPrices,0)
   const totalQuantity = cartItems.reduce((acc, cartItems) => acc +=cartItems.quantity,0)
  
    return {totalPrice, totalQuantity}
}

export default GetTotal; 
