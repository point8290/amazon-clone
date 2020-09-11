import React from "react";
import StarIcon from "@material-ui/icons/Star";
import {useStateValue} from "./StateProvider"
import "./Product.css";
function Product({id, title, image, price, rating }) {
   
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => { 
    
    dispatch({
      type: "ADD_TO_BASKET", item: {
        
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              
                <StarIcon key={i} className="rating__star" />
              
            ))}
        </div>
      </div>
      <img
        src= {image}
        alt=""
      />

      <button
        onClick={addToBasket}
        className="product__button">Add to Basket</button>
    </div>
  );
}

export default Product;
