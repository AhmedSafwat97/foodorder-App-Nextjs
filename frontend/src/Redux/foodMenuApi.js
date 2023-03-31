
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const foodMenuApi = createApi({
  reducerPath: 'foodMenuApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://food-order-1z93.onrender.com/' }),
  endpoints: (builder) => ({
    getfoodMenuByName: builder.query({
      query: (name) => `foodMenu/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetfoodMenuByNameQuery } = foodMenuApi