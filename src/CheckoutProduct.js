import React from 'react'
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from './StateProvider';



function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
  return (
    <div>
      
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title} </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="rating__star" />
            ))}
        </div>
      </div>
      <div>
        <button className="product__remove" onClick={removeFromBasket}> Remove this item</button>
      </div>
      
    </div>
  );
}

export default CheckoutProduct
