import { Link, useNavigate } from "react-router-dom";
import HeaderPage from "./HeaderPage";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { removeItemFromCart } from "../store/utils/ClientActions";
import EmptyCart from "./EmptyCart";

const shippingcharges = 160;
const discount = 200;

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handletogopaymentpage = () => {
    const order = {
      cart: cart,
      shippingcharges,
      discount,
      user,
    };
    console.log(order);
    localStorage.setItem("latestOrder", JSON.stringify(order));
    navigate("/address");
  };

  return (
    <>
      {cart && cart?.length == 1 ? (
        <EmptyCart />
      ) : (
        <>
          <motion.div initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="p-2 flex justify-between bg-slate-800 pr-5 text-[70%] 500px:text-[80%] 600px:text-[90%] 700px:text-[100%] text-white mb-5  border-b-2 border-black ">
            <p className="text-[250%] h-full font-bold">Cart</p>
            <div className="flex gap-3 600px:gap-4 700px:gap-5 800px:gap-6 h-full items-center justify-center text-[130%] font-semibold">
               <Link to={'/'} className=" mt-4 hover:text-gray-300 cursor-pointer">Home</Link>
               <Link to={'/products'} className=" mt-4 hover:text-gray-300 cursor-pointer">Products</Link>
               <Link to={'/profile'} className=" mt-4 hover:text-gray-300 cursor-pointer">Profile</Link>
            </div>
          </motion.div>
          <div className="w-full max-h-screen pb-14   flex flex-col 900px:flex-row">
            <div
              className={` min-h-[370px] 900px:h-screen overflow-y-scroll p-3 text-[90%] 550px:text-[100%] w-full  overflow-hidden max-h-screen    flex flex-col gap-6 items-center`}
            >
              {cart?.length &&
                cart?.map((i, index) => (
                  <motion.div
                    initial={{ x: -2000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + (index - index * 0.7),
                    }}
                    key={index}
                    className="w-full   h-[160px] 450px:h-[180px] 550px:h-[220px] 700px:h-[240px] 800px:h-[250px] 900px:h-[220px] 1400px:h-[250px] 1700px:h-[290px] flex border border-black  rounded-md "
                  >
                    <div className="h-full  w-[35%] ">
                      <img
                        className=" rounded-md w-full h-full"
                        src={i?.images[0]}
                        alt=""
                      />
                    </div>
                    <div className="w-[60%] flex flex-col 550px:gap-2 550px:text-[110%]  550px:p-3 1700px:gap-7">
                      <p className="m-1 text-center text-white   rounded-2xl bg-black shadow-black shadow-2xl">
                        {i?.title}
                      </p>
                      <p className="mt-3 pl-4 pr-4 text-[90%] text-gray-600">
                        {i?.description}
                      </p>
                      <div className="flex mt-2 pl-1 ml-3 gap-3 items-center pr-1">
                        <p className="font-semibold text-[110%]">
                          ₹ {i?.price}
                        </p>
                        <p className="text-[120%] bg-green-400 rounded-2xl text-white pl-4 pr-4">
                          13% off
                        </p>
                      </div>
                      <div className="flex p-4 text-[80%]  gap-5">
                        <button
                          // onClick={() => removeItemFromCart(i?._id)}
                          onClick={() => removeItemFromCart(i)}
                          type="button"
                          className="w-32 h-8 text-red-500 hover:text-white text-[120%] font-semibold hover:bg-red-500 border border-red-600 "
                        >
                          Remove
                        </button>
                        <button className="w-32 h-8 hover:text-white text-[120%] font-semibold hover:bg-black border border-black">
                          Buy now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
            <div className="w-full text-[80%] 1000px:text-[100%] flex flex-col items-center ">
              <motion.div
                initial={{ y: -400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="border w-[90%]  600px:w-[60%] 900px:w-[80%] 1200px:w-[60%]  flex flex-col gap-4 p-4 mt-12 rounded-xl h-min border-black"
              >
                <div className="justify-center flex p-3 pl-5 pr-5 bg-slate-900 text-white text-[140%] font-semibold">
                  Order Summary
                </div>
                <div className="flex text-[120%] font-semibold border-b border-black pb-1 justify-between">
                  <p>Items Price</p>
                  <p>
                    ₹{" "}
                    {cart?.reduce((a, b) => {
                      return a + b.price;
                    }, 0)}
                  </p>
                </div>
                <div className="flex text-[120%] font-semibold border-b border-black pb-1 justify-between">
                  <p>Shipping Charges</p>
                  <p>₹ {shippingcharges}</p>
                </div>
                <div className="flex text-[120%] font-semibold border-b border-black pb-1 justify-between">
                  <p>Discount Price</p>
                  <p className="text-green-500">₹ {discount}</p>
                </div>
                <div className="justify-center flex p-3 pl-5 pr-5 bg-slate-900 text-white text-[140%] font-semibold">
                  Total Price ₹{" "}
                  {cart?.reduce((a, b) => {
                    return a + b.price;
                  }, 0) -
                    discount +
                    shippingcharges}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="w-[80%] flex justify-center mt-6"
              >
                <div
                  onClick={handletogopaymentpage}
                  className="p-2 flex justify-center items-center pl-4 pr-4 900px:p-3 cursor-pointer w-full 600px:w-[75%] rounded-3xl hover:text-white text-[100%] font-semibold hover:bg-black border border-black"
                >
                  CONTINUE TO ADDRESS
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
