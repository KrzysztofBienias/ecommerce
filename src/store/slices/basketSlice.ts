import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store';
import { Product } from '../../types';

interface Basket {
    items: Product[];
}

const initialState = { items: [] } as Basket;

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const item = { ...action.payload, deleteId: uuidv4() };
            state.items = [...state.items, item];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((basketItem) => basketItem.deleteId === action.payload);
            let newBasket = [...state.items];

            if (index >= 0) newBasket.splice(index, 1);
            else console.warn(`Cannot remove product (id: ${action.payload.id}) as its not in the basket`);

            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
