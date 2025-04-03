import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type CartItem = {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  carts: CartItem[];
  totalProducts: number;
  totalPrice: number;
};

const initialState: CartState = {
  carts: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProduct = state.carts.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }

      state.totalProducts += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.carts;
export const selectCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;
