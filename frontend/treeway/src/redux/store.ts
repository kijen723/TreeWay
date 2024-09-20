import { createStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// config 작성
const persistConfig = {
    key: 'root',
    storage: storage,
};

// persistReduce 생성
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

