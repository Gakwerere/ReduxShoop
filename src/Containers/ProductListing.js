import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponet from "./ProductComponent";
import axios from "axios";

import { setProducts} from "../Redux/actions/ProductActions";


const ProductListing = () => {
    const products = useSelector((state) => state);
     
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
             .get("https://fakestoreapi.com/products")
             .catch((err) => {
                 console.log("Err", err);
             });
             console.log(response.data);

             dispatch(setProducts(response.data));
             
    };

    useEffect(() => {
        fetchProducts();
    } , []);
    console.log("Products: ", products);
    return ( 
        <div className="ui  container grid  ">
            <ProductComponet/>
        </div>
     );
}
 
export default ProductListing;