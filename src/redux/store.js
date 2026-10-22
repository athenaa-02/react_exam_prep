import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { value: ['kiwi', 'pineApple', 'apple' ] },
  reducers: {
    addItem: (state, action) => {
       state.value.push(action.payload)
    },

    removeItem: (state, action) => {
     state.value= state.value.filter((fruit) => fruit !== action.payload )
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
