import { configureStore, createSlice } from '@reduxjs/toolkit';

const INITIAL_CART = [
  {
    id: 0,
    product_name: '초장면 이중 편직 팬츠',
    size: 'FREE',
    color: 'BLACK',
    price: 49000,
    thumbnail: 'BBT17A2S_COL_01_80.jpeg',
    count: 2,
  },
  {
    id: 1,
    product_name: '이중 편직 빅 티셔츠',
    size: 'L',
    color: 'OFF-WHITE',
    price: 29000,
    thumbnail: 'ABA19A2S_COL_375_80.jpeg',
    count: 1,
  },
];

const carts = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    cart: carts.reducer,
  },
});

export const cartActions = carts.actions;
