import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Product = {
  id: number,
  title: string,
  price: number,
}

interface ProductState {
  items: Product[],
  status: 'idle' | 'loading' | 'failed' | 'succeeded'
}

const initialState: ProductState = {
  items: [],
  status: 'idle'
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    const ans = await response.data;
    return ans;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;
