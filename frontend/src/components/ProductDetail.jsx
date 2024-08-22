import { FaChevronRight } from "react-icons/fa6";
import Footer from "./Footer";
import HeaderPage from "./HeaderPage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { addItemToCart } from "../store/utils/ClientActions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const [open, setopen] = useState(0);
  const { productid } = useParams();
  const { allproducts } = useSelector((state) => state.product);
  const [product, setproduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const prdt = allproducts.find((product) => product._id === productid);
    setproduct(prdt);
  }, [productid, allproducts]);

  return (
    <>
      {" "}
      <Toaster />
      <HeaderPage />
      <div className="min-h-[100vh] mb-10 border-b-2 border-black pb-10 flex flex-col 900px:flex-row pt-6">
        <div className="w-full flex flex-col 600px:flex-row gap-2">
          <img
            className=" h-full w-full  1000px:h-[80%] 1200px:h-full 900px:h-[60%]  600px:w-[80%] 1200px:w-[85%] border border-black "
            src={product?.images[imageIndex]}
          />
          <div className="h-full flex    w-full 1200px:w-[15%] 900px:h-[60%] 1000px:h-[80%] 1200px:h-full max-600px:overflow-x-scroll flex-row 600px:h-full 600px:flex-col 600px:items-center 600px:overflow-y-scroll   600px:w-[80%]  justify-center gap-3  ">
            {product?.images?.map((i, index) => (
              <img
                key={i}
                onClick={() => setImageIndex(index)}
                className="rounded-md border h-24 w-20 border-black"
                src={i}
              />
            ))}
          </div>
        </div>
        <div className=" w-full text-[80%] 600px:text-[100%]   flex items-center flex-col">
          <div className=" w-full 1400px:w-[60%] 500px:w-[80%] p-4 text-[130%] font-semibold mt-12">
            <p>{product?.title}</p>
            <p>₹ {product?.price}</p>
            <br />
            <p className="text-[90%]">COLORS</p>
            <div className="grid grid-cols-5 gap-8 flex-wrap mt-6">
              {product?.colors?.map((i) => (
                <div
                  key={i}
                  style={{ backgroundColor: i }}
                  className="h-9 w-9 border  border-black rounded-full"
                ></div>
              ))}
            </div>
            <div className="text-[90%] mt-8">SIZE</div>
            <div className="flex gap-5">
              <div className="w-16 h-10 mt-4 flex justify-center items-center  border border-black hover:bg-black hover:text-white text-[110%]">
                XS
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center  border border-black hover:bg-black hover:text-white text-[110%]">
                S
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center  border border-black hover:bg-black hover:text-white text-[110%]">
                M
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center  border border-black hover:bg-black hover:text-white text-[110%]">
                L
              </div>
              <div className="w-16 h-10 mt-4 flex justify-center items-center  border border-black hover:bg-black hover:text-white text-[110%]">
                XL
              </div>
            </div>
            <p className="mt-2 text-[80%]">Please select a size</p>
          </div>
          <div className="mt-8 w-[80%] text-[110%] 600px:text-[130%] font-semibold">
            <motion.div
              initial={{ height: 52 }}
              animate={
                open == 1
                  ? {
                      height: 200,
                    }
                  : { height: 52 }
              }
              className="border-t overflow-hidden border-black "
            >
              <div
                onClick={() => (open == 1 ? setopen(0) : setopen(1))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Description{" "}
                <FaChevronRight
                  className={`ml-auto  transition-all duration-150 ${
                    open == 1 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                {product?.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ height: 52 }}
              animate={
                open == 2
                  ? {
                      height: 200,
                    }
                  : { height: 52 }
              }
              className="border-t overflow-hidden border-black "
            >
              <div
                onClick={() => (open == 2 ? setopen(0) : setopen(2))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Fabric core and origin{" "}
                <FaChevronRight
                  className={`ml-auto  transition-all duration-150 ${
                    open == 2 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                {product?.clothdetail}
              </p>
            </motion.div>
            <motion.div
              initial={{ height: 52 }}
              animate={
                open == 3
                  ? {
                      height: 200,
                    }
                  : { height: 52 }
              }
              className="border-t border-b overflow-hidden border-black "
            >
              <div
                onClick={() => (open == 3 ? setopen(0) : setopen(3))}
                className="flex h-[52px] cursor-pointer items-center pl-2 pr-2"
              >
                Commitment{" "}
                <FaChevronRight
                  className={`ml-auto  transition-all duration-150 ${
                    open == 3 ? "rotate-90" : "rotate-0"
                  }`}
                />
              </div>
              <p className="text-[90%] font-normal text-gray-700">
                The model measures 186 cm and is wearing a size M. Reference:
                HTSC28015KPIN21 Thick cotton Round neck Short sleeves Serigraphy
                on the front and on the back
              </p>
            </motion.div>
          </div>
          <div className="w-full flex gap-4 text-[80%] mt-10 600px:text-[100%] justify-center">
            <button className="w-[140px] h-[50px] border border-black hover:bg-black hover:text-white text-[120%] font-bold">
              Buy now
            </button>
            <button
              onClick={() => {
                addItemToCart(product) == true
                  ? toast.success("Item added to cart")
                  : toast.error("Item already added to cart");
              }}
              className="w-[140px] h-[50px] border border-black hover:bg-black hover:text-white text-[120%] font-bold"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
