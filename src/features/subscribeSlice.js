import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscribe: {
    currentPlanId: null,
    renewalDate: null,
  },
};

const subscribeSlice = createSlice({
  name: 'subscibe',
  initialState,
  reducers: {
    subscribePlan: (state, action) => {
      state.subscribe.currentPlanId = action.payload.id;
      state.subscribe.renewalDate = action.payload.date;
    },
    unsubscribePlan: (state) => {
      state.subscribe.currentPlanId = null;
      state.subscribe.renewalDate = null;
    },
  },
});

export const { subscribePlan, unsubscribePlan } = subscribeSlice.actions;

export const selectSubscribe = (state) => state.subscribe.subscribe;

export default subscribeSlice.reducer;
