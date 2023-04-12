import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartItems.push(action.payload);
            }
          },

        removeItemFromCart: (state, action) => {
           state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload)
        },

        incrementQuantity: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        item.quantity++;
        },

        decrementQuantity: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        if (item.quantity === 1) {
            item.quantity = 1
          } else {
            item.quantity--;
          }
        },
    }
})

export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;