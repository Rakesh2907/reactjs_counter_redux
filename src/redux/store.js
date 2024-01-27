import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';

const store = configureStore({
    reducer: {
        mycounter: counterReducer
    }
});

export default store;