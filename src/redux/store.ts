import { bookApi } from "@/Services/bookApi";
import { configureStore } from  "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store=configureStore({
     reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
setupListeners(store.dispatch)

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;



