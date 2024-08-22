import { useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import {  useNavigate,  } from "react-router-dom";

const PaymentForm = () => {
  const navigate=useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [name, setName] = useState("");

  if (!elements || !stripe) return <>No Stripe Key</>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Create PaymentIntent
    const { data } = await axios.post("http://localhost:8000/process-payment");

    const cardElement = elements.getElement(CardNumberElement);

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: name,
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("payment successful");
        const cart = JSON.parse(localStorage.getItem("latestOrder"));
        const res = await axios.post("http://localhost:8000/create-order", {
          order: { ...cart, paymentMethod },
        });
        console.log(res.data);
        if(res.data.success) {
          localStorage.removeItem('latestOrder')
          localStorage.removeItem('cart')
          navigate('/')
        }
      }
    }
  };

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <div className="max-w-md min-h-[400px] w-[400px] mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-2xl">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Payment Method
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Card Payment</option>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="form-group">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <CardNumberElement
                id="cardNumber"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="cardExpiry"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <CardExpiryElement
                id="cardExpiry"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="cardCvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <CardCvcElement
                id="cardCvc"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        )}

        {paymentMethod === "cod" && (
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-700">
              Cash on Delivery
            </h2>
            <div className="mt-2 text-sm text-gray-600">
              You can pay with cash when your order is delivered. No Online
              <br />
              <br />
              <div>
                <span className="text-[115%] font-semibold text-gray-700">
                  Payment Required:
                </span>{" "}
                You don't need a credit/debit card or online banking access to
                complete your purchase
              </div>
              <br />
              <div>
                <span className="text-[115%] font-semibold text-gray-700">
                  Payment Security:
                </span>{" "}
                Pay only when you receive the product, ensuring peace of mind
                and security.
              </div>
              <br />
              <div>
                <span className="text-[115%] font-semibold text-gray-700">
                  Convenience:
                </span>{" "}
                Ideal for those who prefer paying in cash and do not wish to use
                online payment methods.
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-700">UPI Payment</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your UPI ID to proceed with the payment.
            </p>
            <div className="form-group mt-2">
              <label
                htmlFor="upiId"
                className="block text-sm font-medium text-gray-700"
              >
                UPI ID
              </label>
              <input
                type="text"
                id="upiId"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter your UPI ID"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
