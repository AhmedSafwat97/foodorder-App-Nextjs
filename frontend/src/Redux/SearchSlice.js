import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value : ""
  };

const SearchSlice = createSlice({
  name: 'Searchh',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
    state.value = action.payload
    },
  },
});

export const { updateSearch } = SearchSlice.actions;

export default SearchSlice.reducer;