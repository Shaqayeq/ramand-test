import { configureStore } from '@reduxjs/toolkit';
import GridReducer  from './features/grid/grid-slice';

export const store = configureStore({
  reducer: {
    gridReducer: GridReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch