// step 5
//Combining All Reducer
import { combineReducers } from "redux";
import { productReducer , selectedProductReducer } from "./ProductReducer";

const reducers = combineReducers ({
    allProducts: productReducer, // sntx : any_key : reducer-file
    product : selectedProductReducer, // key from productDrtail : funtion to do from reducer
});

export default reducers;