import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { foodMenuApi } from './Redux/foodMenuApi'
import { offersApi } from './Redux/offersApi'
import CartReducer from '../src/Redux/Cartslice'


export const store = configureStore({
  reducer: {
    Cart : CartReducer ,
    [foodMenuApi.reducerPath]: foodMenuApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodMenuApi.middleware , offersApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
export default store
