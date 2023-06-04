import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload.toLowerCase();
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
