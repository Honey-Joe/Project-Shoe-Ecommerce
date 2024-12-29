
import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {thunk} from "redux-thunk"
import { productListReducers, productReducers } from "./Reducers/Product";

const PersistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    productListReducers,
    productReducers    
})

const persistedReducer = persistReducer(PersistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)