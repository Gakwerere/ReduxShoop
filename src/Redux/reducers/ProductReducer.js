// step 3
// Creating Reduced it is combine action and state

import { ActionTypes } from "../contants/ActionTypes"; //  this is Action

const initialState = { // this is state
    products :[]
};  

export const productReducer = ( state = initialState ,{type , payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
            
    }
}

export const selectedProductReducer = ( state = {}, {type , payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return { };
        default:
            return state;
            
    }
}

