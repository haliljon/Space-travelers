import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rocketsReducer } from './rockets/rockets';

// const rootReducer = combineReducers({ books: booksReducer, status: checkStatusReducer });
const store = configureStore({ reducer: { rockets: rocketsReducer } });

export default store;
