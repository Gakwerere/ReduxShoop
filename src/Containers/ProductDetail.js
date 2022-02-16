import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedProducts , removeSelectedProduct } from "../Redux/actions/ProductActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product; //dictration get data from store
    const dispatch = useDispatch();
    const { productId } = useParams();
    console.log(productId);
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Err", err);
            });

        dispatch(selectedProducts(response.data));

    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [productId])

    return (
        <div className="ui grid container">
            { Object.keys(product).length === 0 ? (
                <div>...Loading</div>
                ) : (
                    <div>
                        <div className="ui placeholder segment">
                            <div className="ui two column stackable  grid">
                                <div className="ui vertical divider">AND</div>
                                <div className="column lp">
                                    <img src={image} className="ui fluid image" alt="" />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a href=" " className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                )
            }

        </div>
    );
}

export default ProductDetail;