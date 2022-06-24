import React from "react";
import { combineReducers, createStore } from 'redux'
import { productReducer } from './src/ProductScreen/reducer/productReducer'
import { filterReducer } from './src/FilterScreen/reducer/FilterReducer'

const AppReducer = combineReducers({
    "productReducer": productReducer,
    "filterReducer": filterReducer
})

export const store = createStore(AppReducer)

