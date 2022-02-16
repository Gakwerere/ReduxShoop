import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
   
    const renderlist = products.map((products) => {
        const {id ,title, image, price, category} = products;
        return (
            <div className=" wide" key={id}>
                <Link to ={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}/>
                    </div>
                        <div className="content">
                            <div className="header" >{title}</div>
                            <div className="meta price">${price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    
                </div>
            </div>
            </Link>
        </div>
        );
    })

    // const {id , title} = products[0];
    console.log(products);
    return ( 
        <>{renderlist}</>
     );
}
 
export default ProductComponent;