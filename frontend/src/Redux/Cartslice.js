import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SelectedProducts: [],
  SelectedProductsId: [],
};

if (typeof window !== "undefined") {
  initialState.SelectedProducts = localStorage.getItem("cartarray")
    ? JSON.parse(localStorage.getItem("cartarray"))
    : [];
  initialState.SelectedProductsId = localStorage.getItem("IdArray")
    ? JSON.parse(localStorage.getItem("IdArray"))
    : [];
}

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productWithCount = { ...action.payload, quantity: 1 };
      state.SelectedProducts.push(productWithCount);
      // to add The id of the selected product to the array
      state.SelectedProductsId.push(action.payload.id);

      // to add The data to the localstorege
      localStorage.setItem("cartarray", JSON.stringify(state.SelectedProducts));
      localStorage.setItem("IdArray", JSON.stringify(state.SelectedProductsId));
    },
    increment: (state, action) => {
      const incrementProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incrementProduct.quantity += 1;

      localStorage.setItem(
        "cartarray",
        JSON.stringify(state.SelectedProducts))

    },
    decrement: (state, action) => {
      const decrementProduct = state.SelectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      decrementProduct.quantity -= 1;
      // to remove item from array we use

      if (decrementProduct.quantity === 0) {
        const NewSelectedproducts = state.SelectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const NewSelectedproductsId = state.SelectedProductsId.filter((item) => {
            return item !== action.payload.id;
          }
        );
        state.SelectedProducts = NewSelectedproducts;
        state.SelectedProductsId = NewSelectedproductsId;

        localStorage.setItem(
          "IdArray",
          JSON.stringify(state.SelectedProductsId))
      }

      localStorage.setItem(
        "cartarray",
        JSON.stringify(state.SelectedProducts))

    },

    DeleteItem: (state, action) => {
      const NewSelectedproducts = state.SelectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });

      const NewSelectedproductsId = state.SelectedProductsId.filter((item) => {
        return item !== action.payload.id;
      }
    );
      state.SelectedProducts = NewSelectedproducts;
      state.SelectedProductsId = NewSelectedproductsId;

      localStorage.setItem(
        "IdArray",
        JSON.stringify(state.SelectedProductsId))

      localStorage.setItem(
        "cartarray",
        JSON.stringify(state.SelectedProducts))

    },

  },
}
);

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, DeleteItem } =
  CartSlice.actions;

export default CartSlice.reducer;
