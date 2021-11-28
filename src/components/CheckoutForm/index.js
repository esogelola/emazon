import React, { useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import {
  setOrderDetails,
  setErrors,
  checkoutCart,
  clearCart,
} from "../../redux/actions/CartAction";
// Redux
import { useSelector, useDispatch } from "react-redux";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CheckoutForm() {
  const Cart = useSelector((state) => state.Cart);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cart.token != null) {
      dispatch(
        checkoutCart({
          cart: Cart.cart,
          address: Cart.address,
          token: Cart.token,
          total: Cart.total,
        })
      );
      dispatch(clearCart);
      history.push("/");
    }
  }, [Cart.token]);
  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setErrors(event.error.message);
    } else {
      setErrors(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setErrors(result.error.message);
    } else {
      setErrors(null); // Send the token to your server.
      const token = result.token;
      dispatch(
        setOrderDetails({
          address: Cart.address,
          token: token.id,
        })
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) =>
            dispatch(
              setOrderDetails({
                address: e.target.value,
                token: Cart.token,
              })
            )
          }
        />

        <div className="stripe-section">
          <label htmlFor="stripe-element"> Credit or debit card </label>
          <CardElement
            id="stripe-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
        </div>
        <div className="card-errors" role="alert">
          {Cart.errors}
        </div>
      </div>
      <button type="submit" className="btn">
        Submit Payment
      </button>
    </form>
  );
}

export default CheckoutForm;
