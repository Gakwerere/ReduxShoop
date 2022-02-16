//step 2

// Creacte Actions
import { ActionTypes } from "../contants/ActionTypes"

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
};

export const selectedProducts = (products) => {
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : products,
    };
};

export const removeSelectedProduct= (products) => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS, 
    };
};