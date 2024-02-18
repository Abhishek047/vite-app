import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../modal/AuthModal';

const initialState = new AuthState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // @ for setting nano id
    setNanoId: (state: AuthState, { payload }: PayloadAction<string>) => ({
      ...state,
      nanoId: payload,
    }),
    // @ for setting loading state of auth state
    setLoadingAuthDetails: (
      state: AuthState,
      { payload }: PayloadAction<boolean>
    ) => ({
      ...state,
      loadingAuthDetails: payload,
    }),
    // @ has details
    setHasDetails: (state: AuthState, { payload }: PayloadAction<boolean>) => ({
      ...state,
      hasDetails: payload,
    }),
  },
});

export const { setNanoId, setLoadingAuthDetails, setHasDetails } =
  authSlice.actions;

export default authSlice.reducer;
