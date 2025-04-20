import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice"; // Import the todo reducer from the todoSlice file
export const store = configureStore({
    reducer: todoReducer
});
// The configureStore function from Redux Toolkit is a higher-level API that simplifies the store setup process.