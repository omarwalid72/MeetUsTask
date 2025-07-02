import {configureStore} from '@reduxjs/toolkit';

import authReducer from './slices/authSlice'; // Import your auth slice
import userReducer from './slices/userSlice'; // Import your user slice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth slice to the store
    user: userReducer, // Add the user slice to the store

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid warnings with AsyncStorage
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
