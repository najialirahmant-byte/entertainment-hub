import { configureStore } from '@reduxjs/toolkit';

// Import reducers (to be created)
// import authReducer from './slices/authSlice';
// import contentReducer from './slices/contentSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // content: contentReducer,
  },
});

export default store;
