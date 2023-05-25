'use client';

import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi';
import basketReducer from './slices/basksetSlice';

const store = configureStore({
    reducer: {
        basket: basketReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
