import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface BasketType {
    items: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }[];
}

const initialState = { items: [] } as BasketType;

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((basketItem) => basketItem.id === action.payload);
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
