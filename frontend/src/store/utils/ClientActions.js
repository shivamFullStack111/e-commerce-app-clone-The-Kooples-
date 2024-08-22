import cart, { additem, setCart } from "../slices/cart";
import { setallproducts } from "../slices/productsSlice";
import { setisAuthenticated, setloading, setuser } from "../slices/userSlice";
import store from "../store";
import axios from "axios";
import Cookies from "js-cookie";

export const addItemToCart = (product) => {
  try {
    const isexist = store
      .getState(cart)
      .cart.cart.find((cart) => cart._id === product._id);
    if (isexist) {
      return false;
    } else {
      store.dispatch(additem(product));
      const data = store.getState(cart).cart.cart;
      localStorage.setItem("cart", JSON.stringify(data ? data : []));
      GetCartItemsFromStorage();
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const removeItemFromCart = (product) => {
  console.log(product);
  const filteredCart = store
    .getState(cart)
    .cart.cart.filter((cart) => cart._id !== product._id);
  console.log(filteredCart);
  localStorage.setItem(
    "cart",
    JSON.stringify(filteredCart ? [...filteredCart] : [])
  );
  GetCartItemsFromStorage();
};

export const GetCartItemsFromStorage = () => {
  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    store.dispatch(setCart(cart));
  }
};
// check first time authentication
export const checkAuthentication = async () => {
  try {
    store.dispatch(setloading(false));
    console.log(Cookies.get("LOGIN_TOKEN"));
    if (Cookies.get("LOGIN_TOKEN")) {
      const res = await axios.get("http://localhost:8000/isauthenticated", {
        headers: { Authorization: JSON.parse(Cookies.get("LOGIN_TOKEN")) },
      });

      if (res.data.success) {
        store.dispatch(setisAuthenticated(true));
        store.dispatch(setuser(res.data.user));
      }
      store.dispatch(setloading(false));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const checkValidations = (data) => {
  if (!data.email)
    return { success: false, type: "email", message: "email is required" };
  if (!data.gender)
    return {
      success: false,
      type: "gender",
      message: "this field is required",
    };
  if (!data.name)
    return { success: false, type: "name", message: "name is required" };
  if (!data.lastname)
    return {
      success: false,
      type: "lastname",
      message: "lastname is required",
    };
  if (!data.dateofbirth)
    return {
      success: false,
      type: "dateofbirth",
      message: "date of birth is required",
    };
  if (!data.phonenumber)
    return {
      success: false,
      type: "phonenumber",
      message: "phone number is required",
    };
  if (data.password.length < 8)
    return {
      success: false,
      type: "password",
      message: "passeord must be at least 8 characters",
    };
  if (data.confirmpassword.length < 8)
    return {
      success: false,
      type: "confirmpassword",
      message: "password must be at least 8 characters",
    };
  if (data.password !== data.confirmpassword)
    return {
      success: false,
      type: "passwordnotmatch",
      message: "password and confirmpassword do not match",
    };
  return { success: true, message: "user is ready to register" };
};

export const checkProductValidation = (data) => {
  if (!data.title)
    return { success: false, type: "title", message: "title is required" };
  if (!data.price)
    return { success: false, type: "price", message: "price is required" };
  if (!data.category)
    return {
      success: false,
      type: "category",
      message: "category is required",
    };
  if (!data.gender)
    return { success: false, type: "gender", message: "gender is required" };
  if (!data.stock)
    return { success: false, type: "stock", message: "stock is required" };
  if (data.images.length == 0)
    return { success: false, type: "images", message: "images is required" };
  if (!data.description)
    return {
      success: false,
      type: "description",
      message: "description is required",
    };
  if (!data.clothdetail)
    return {
      success: false,
      type: "clothdetail",
      message: "cloth detail is required",
    };

  return { success: true, message: "product is valid" };
};

export const getallproducts = async () => {
  const res = await axios.get("http://localhost:8000/get-all-products");
  console.log(res.data);
  if (res.data.success) store.dispatch(setallproducts(res.data.products));
};

export const saveAddress = async (dataa) => {
  const {
    user,
    address,
    streetaddress,
    name,
    email,
    country,
    state,
    city,
    pincode,
    phonenumber,
    phonenumber2,
  } = dataa;

  if (!user) return { success: false, message: "Please login to continue" };

  if (!address) return { success: false, message: "Address is required" };

  if (!name) return { success: false, message: "Name is required" };

  if (!email) return { success: false, message: "Email is required" };

  if (!country) return { success: false, message: "Country is required" };

  if (!state) return { success: false, message: "State is required" };

  if (!city) return { success: false, message: "City is required" };

  if (!pincode) return { success: false, message: "Pincode is required" };

  if (!phonenumber) return { success: false, message: "Phone number is required" };

  const {data} = await axios.post("http://localhost:8000/save-address", {user,address,streetaddress,name,email,country,state,city,pincode,phonenumber,phonenumber2,});

  return data
};
