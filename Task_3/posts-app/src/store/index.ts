import { configureStore } from '@reduxjs/toolkit';
import { apiPostForm } from '../services/apiPostForm';

const store = configureStore({
reducer: {
    [apiPostForm.reducerPath]: apiPostForm.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPostForm.middleware),
});

export default store;