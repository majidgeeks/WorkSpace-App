import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialeState = {
  currentScreen: 'SelectCommunity',
};

export const bottomTabSlice = createSlice({
  name: 'bottomTabNavigator',
  initialeState,
  reducers: {
    navigateToBottomTabs: (state, action) => {
      state.currentScreen = action.payload;
    },
  },
});

export const {navigateToBottomTabs} = bottomTabSlice.actions;
export const selectCurrentScreen = state =>
  state.bottomTabNavigator.currentScreen;

export default bottomTabSlice.reducer;
