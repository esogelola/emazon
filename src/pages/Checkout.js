import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

import CheckoutForm from "../components/CheckoutForm";
function Checkout() {
  const stripePromise = loadStripe(
    "pk_test_51Jr7QoBkc0dVZiAVdRWPzzQbEt3KCmIdZxGhoLQB8kFsXjovS0gBZiwuUtlmTjrvMYnFS5MegK7foyzU65KPlCTr00exMjZsAh"
  );
  return (
    <div>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section className="bg-white py-8">
            <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 p-4 shadow-md rounded-md text-left">
              <CheckoutForm />
            </div>
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </div>
  );
}

export default Checkout;
