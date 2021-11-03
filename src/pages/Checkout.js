import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function Checkout() {
  const stripePromise = loadStripe(
    "pk_test_51Jr7QoBkc0dVZiAVdRWPzzQbEt3KCmIdZxGhoLQB8kFsXjovS0gBZiwuUtlmTjrvMYnFS5MegK7foyzU65KPlCTr00exMjZsAh"
  );
  return <div>Checkout</div>;
}

export default Checkout;
