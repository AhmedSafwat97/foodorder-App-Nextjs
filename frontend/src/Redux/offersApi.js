
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const offersApi = createApi({
  reducerPath: 'offersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://food-order-t31p.onrender.com/' }),
  endpoints: (builder) => ({
    getoffersByName: builder.query({
      query: (name) => `offers`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetoffersByNameQuery } = offersApi