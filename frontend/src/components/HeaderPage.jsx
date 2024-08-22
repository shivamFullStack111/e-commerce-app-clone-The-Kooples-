import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderPage = () => {
  const [headerOpen, setheaderOpen] = useState(false);
  const {cart}=useSelector(state=>state.cart)
  return (
    <>
      <div className="w-full max-1200px:hidden">
        <div className="w-full border-b-2 border-black h-12 flex items-center justify-between pl-4 pr-4">
          <p className="font-bold ">
            {" "}
            <FaChevronLeft size={22} />
          </p>
          <p>
            <span className="text-[120%] font-semibold">Last Chance : </span>
            <span>Upto 50% off | Mens | Womens</span>
          </p>
          <p>
            <FaChevronRight size={22} />
          </p>
        </div>

        <div className="h-[6.5rem] border-b border-black flex ">
          <div className="w-[13rem] h-full border-r border-black flex flex-col justify-center font-mono font-extrabold text-[200%] ">
            <Link to={"/"} className="ml-3 cursor-pointer flex flex-col">
              {" "}
              <span>THE</span> <span>KOOPLES</span>{" "}
            </Link>{" "}
          </div>
          <div className="w-full h-full flex items-end justify-between ">
            <div className="flex justify-between gap-4  ml-5">
              {/* all popdowns */}
              <>
                
                {/* 2---------------- */}
                <div className="flex flex-col group pb-3">
                  <p className="text-[20px] font-bold">WOMEN'S</p>
                  <p className="h-[0.18rem] w-0 group-hover:w-full transition-width duration-200  bg-black"></p>
                  {/* second popdown */}
                  <div className="absolute  bg-white hidden  group-hover:block top-[9.5rem] h-[55vh]  w-full border-b pl-4 pr-4 border-black left-0">
                    <div className="w-full h-full grid grid-cols-5 ">
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            READY TO WEAR
                          </p>
                          <p>Dresses</p>
                          <p>T-shirts</p>
                          <p>Shirts & Tops</p>
                          <p>Talloring</p>
                          <p>Jackets & Short jackets</p>
                          <p>Swearshirts</p>
                          <p>Jumpers & Cardigans</p>
                          <p>Trouser and Jeans</p>
                          <p>Skirts & Shorts</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">SECTIONS</p>
                          <p>Best sellers</p>
                          <p>Ceremony</p>
                          <p>The iconic pieces</p>
                          <p>What is</p>
                          <p>Leather</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            ACCESSORIES
                          </p>
                          <p>Belts</p>
                          <p>Small leather goods</p>
                          <p>Caps</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">SHOES</p>
                          <p>Ankie boots</p>
                          <p>Sneakers</p>
                          <p>Loafers & Court shoes</p>
                          <p>Sandals & Ballerinas</p>
                          <p>See all</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3------------ */}
                <div className="flex flex-col group pb-3">
                  <p className="text-[20px] font-bold">MEN'S</p>
                  <p className="h-[0.18rem] w-0 group-hover:w-full transition-width duration-200  bg-black"></p>
                  {/* Third popdown */}
                  <div className="absolute  bg-white hidden  group-hover:block top-[9.5rem] h-[55vh]  w-full border-b pl-4 pr-4 border-black left-0">
                    <div className="w-full h-full grid grid-cols-5 ">
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            READY TO WEAR
                          </p>
                          <p>T-shirts</p>
                          <p>Sweatshirts</p>
                          <p>Jackets & Short jackets</p>
                          <p>Suits</p>
                          <p>Trousers & Jeans</p>
                          <p>Polos</p>
                          <p>Jumpers & cardigans</p>
                          <p>Shorts & Swimsuits</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">SECTIONS</p>
                          <p>Best sellers</p>
                          <p>Ceremony</p>
                          <p>The iconic pieces</p>
                          <p>What is</p>
                          <p>Leather</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            ACCESSORIES
                          </p>
                          <p>Belts</p>
                          <p>Bags & Small leather goods</p>
                          <p>Belts</p>
                          <p>Ties & Bow ties</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">SHOES</p>
                          <p>See all</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 5------------------ */}
                <div className="flex flex-col group pb-3">
                  <p className="text-[20px] font-bold">LAST CHANCE</p>
                  <p className="h-[0.18rem] w-0 group-hover:w-full transition-width duration-200  bg-black"></p>
                  {/* fifth popdown */}
                  <div className="absolute hidden  bg-white group-hover:block top-[9.5rem] h-[85vh]  w-full border-b pl-4 pr-4 border-black left-0">
                    <div className="w-full h-full grid grid-cols-5 ">
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">WOMEN</p>
                          <p>Dresses & Skirts</p>
                          <p>T-shirts & Sweatshirts</p>
                          <p>Coats & Jackets</p>
                          <p>Tops & Shirts</p>
                          <p>Tailoring</p>
                          <p>Jumpers</p>
                          <p>Trousers & Jeans</p>
                          <p>Shoes & Accessories</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            WOMEN'S SELECTIONS
                          </p>
                          <p>Best sellers</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">MEN</p>
                          <p>T-shirts & Polos</p>
                          <p>Shirts</p>
                          <p>Coats & Jackets</p>
                          <p>Suits</p>
                          <p>Jumpers & Sweatshirts</p>
                          <p>Trouser & Jeans</p>
                          <p>Accessories</p>
                          <p>See all</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="mt-16 flex gap-3 flex-col ">
                          <p className="text-[110%] font-semibold">
                            MEN'S SELECTIONS
                          </p>
                          <p>Best sellers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col group pb-3 cursor-pointer">
                  <Link to={"/products"} className="text-[20px] font-bold">
                    ALL PRODUCTS
                  </Link>
                </div>
              </>
            </div>
            <div className="flex items-center gap-6 mr-10 pb-3">
              <div className="border-black border-b flex items-center">
                <input
                  type="text"
                  placeholder="SEARCH"
                  className="outline-none text-[130%] tracking-normal font-semibold"
                />
                <CiSearch size={25} />
              </div>
              <Link to={"/profile"}>
                <FiUser size={30} />
              </Link>
              {/* <div>
                <SlLocationPin size={30} />
              </div> */}
              <Link to={"/cart"} className="cursor-pointer relative">
                {cart.length!==0&&<p className="absolute h-4 w-4 flex justify-center items-center right-0  bg-red-400 text-white rounded-full ">{cart.length}</p>}
                <HiOutlineShoppingBag size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  mobile header */}

      <div className="h-16 relative z-40 w-full 1200px:hidden bg-white justify-between border-b-2 pr-2 flex items-center border-black">
        <div className="flex w-full items-center">
          <div className=" w-[27%] border-black flex ">
            <div className=" h-full  border-black flex flex-col justify-center font-mono font-extrabold text-[100%] ">
              <Link to={"/"} className="ml-3 flex flex-col">
                {" "}
                <span>THE</span> <span>KOOPLES</span>{" "}
              </Link>{" "}
            </div>
          </div>
          <div className="border-black w-[70%] text-[110%] border-b flex items-center">
            <input
              type="text"
              placeholder="SEARCH"
              className="outline-none w-[90%]  tracking-normal font-semibold"
            />
            <CiSearch className="ml-auto" size={25} color="black" />
          </div>
        </div>
        <div
          className=" text-[35px]  w-min h-min"
          onClick={() => setheaderOpen(!headerOpen)}
        >
          {headerOpen ? <RxCross2 /> : <IoReorderThreeOutline />}
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          animate={
            headerOpen ? { height: 330, opacity: 1 } : { height: 0, opacity: 0 }
          }
          className="absolute z-50 border-b-2 pt-2 pb-2 border-black flex flex-col  bg-white overflow-y-scroll overflow-x-hidden w-full top-16"
        >
           <Link to={'/'} className="h-full bg-white flex items-center cursor-pointer ml-4 w-full">
            HOME
          </Link>
          <Link to={'/create-product'} className="h-full bg-white flex items-center cursor-pointer ml-4 w-full">
            CREATE PRODUCT
          </Link>
          <Link
            to={"/products"}
            className="h-full bg-white flex items-center cursor-pointer ml-4 w-full"
          >
            PRODUCTS
          </Link>
          <Link
            to={"/cart"}
            className="h-full bg-white flex items-center cursor-pointer ml-4 w-full"
          >
            CART
          </Link>
          <Link
            to={"/profile"}
            className="h-full bg-white flex items-center cursor-pointer ml-4 w-full"
          >
            PROFILE
          </Link>
         
          <div className="h-full bg-white flex items-center cursor-pointer ml-4 w-full">
            BAGS
          </div>
          <div className="h-full bg-white flex items-center cursor-pointer ml-4 w-full">
            LAST CHANCE
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeaderPage;
