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
  cartItems: CartItem[];
  totalProducts: number;
  totalPrice: number;
};

const initialState: CartState = {
  cartItems: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingProduct = state.cartItems.find(
        (product) => product.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalProducts++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const existingProduct = state.cartItems.find(
        (product) => product.id === action.payload.id,
      );

      if (!existingProduct) return;

      if (existingProduct?.quantity > 1) {
        existingProduct.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((product) => {
          return product.id !== action.payload.id;
        });
      }

      state.totalProducts--;
      state.totalPrice -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalProducts = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart.cartItems;
export const selectCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;
