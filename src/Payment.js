import React,{useState,useEffect} from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import {db} from "./firebase"
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
          const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
          });
          setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
  
    console.log("The secret is", clientSecret);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>
        {
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created:paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
              type:"EMPTY_BASKET"
            })
            history.replace('/orders')
        })
         
  }
  
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error?e.error.message:"")
    }
  return (
    <div className="payment">
          <div className="payment__container">
          <h1>
          Checkout {

          <Link to="/checkout" >
              {basket?.length} items
          </Link>
                  }
          </h1>
        
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div classname="payment__address">
              <p>{user?.email}</p>
              <p>123 React lane</p>
              <p>Los Angles</p>
          </div> 
        </div>


        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delievery</h3>
          </div>
          <div className="payment__item">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>


        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
        <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} /> 
      <div className="payment__priceContainer">
                
        <CurrencyFormat
            renderText={(value) => (
            <h3>
              Order Total:{value}
            </h3>)}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandsSeparator={true}
            prefix={"$"}
        />       
        <button
        disabled={processing || disabled || succeeded}>
        <span> {processing ? <p>Processing
          </p> : "Buy Now"}
        </span>
        </button>
        </div> 
          {error && <div>{error}</div>}     
        </form>      
        </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
