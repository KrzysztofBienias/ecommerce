'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupedProducts, Product } from '../../types';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-dun-phi.vercel.app/',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], null>({
            query: () => 'products',
        }),
        getGroupedProducts: builder.query<GroupedProducts, null>({
            query: () => 'products/grouped',
        }),
    }),
});

export const { useGetAllProductsQuery, useGetGroupedProductsQuery } = productsApi;
