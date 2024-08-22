import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct";
import { useEffect, useState } from "react";
import {
  GetCartItemsFromStorage,
  checkAuthentication,
  getallproducts,
} from "./store/utils/ClientActions";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import CartPage from "../src/components/CartPage";
import PaymentForm from "./components/PaymentForm";
import AddressPage from "./components/AddressPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const App = () => {
  const { loading } = useSelector((state) => state.user);
  const [key, setKey] = useState(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    getallproducts();
  }, []);

  useEffect(() => {
    GetCartItemsFromStorage();
  }, []);

  useEffect(() => {
    const getKey = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get-public-key");
        setKey(res.data.key);
      } catch (error) {
        console.error("Error fetching the Stripe public key:", error);
      }
    };
    getKey();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:productid" element={<ProductDetail />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/cart" element={<CartPage />} />
            {key && (
              <Route
                path="/payment"
                element={
                  <Elements  stripe={loadStripe(key)}>
                    <PaymentForm />
                  </Elements>
                }
              />
            )}
            <Route path="/address" element={<AddressPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
