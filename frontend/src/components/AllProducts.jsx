import { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const { allproducts } = useSelector((state) => state.product);
  const [priceFilter, setpriceFilter] = useState("hightolow");
  const [products, setproducts] = useState(null);

  const findFIlterPRoduct = () => {
    if (priceFilter == "lowtohigh") {
      const filterproduct = [...allproducts].sort((a, b) => a.price - b.price);
      setproducts(filterproduct);
    } else if (priceFilter == "hightolow") {
      const filterproduct = [...allproducts].sort((a, b) => b.price - a.price);
      setproducts(filterproduct);
    } else {
      setproducts(allproducts);
    }
  };
  useEffect(() => {
    if (allproducts.length) {
      findFIlterPRoduct();
    }
  }, [allproducts, priceFilter]);
  return (
    <>
      <HeaderPage />
      <FilterHeader priceFilter={priceFilter} setpriceFilter={setpriceFilter} />
      <div className="min-h-[80vh]">
        <div className="w-full h-full overflow-hidden  grid p-1 gap-1 grid-cols-2 650px:grid-cols-3 1050px:grid-cols-4">
          {products?.map((i) => (
            <Link
              to={`/product/${i._id}`}
              key={i._id}
              className="h-[32vh] 1000px:text-[130%] font-semibold 450px:h-[35vh] 550px:h-[41vh] 650px:h-[35vh] 800px:h-[41vh] 950px:h-[48vh] 1050px:h-[46vh] 1350px:h-[50vh] 1500px:h-[58vh] border border-black"
            >
              <img
                className="h-[28vh] 450px:h-[31vh] 550px:h-[37vh] 650px:h-[31vh] 800px:h-[37vh]  950px:h-[44vh] 1050px:h-[42vh] 1350px:h-[46vh] 1500px:h-[54vh] w-full"
                src={i.images[0]}
                alt=""
              />
              <div className="flex text-[90%] h-auto p-1 items-center justify-between">
                <span>
                  {i.title.slice(0, 15)}
                  {i.title.length > 15 && "..."}
                </span>
                <span>₹{i.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllProducts;

import { FaChevronRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const FilterHeader = (props) => {
  const [sortby, setsortby] = useState("SORT BY");
  const [sortOpen, setsortOpen] = useState(false);
  const [filterOpen, setfilterOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`w-full ${
          !filterOpen && "hidden"
        } bg-[#00000070] top-0 flex justify-end z-40 h-screen fixed `}
      >
        <motion.div
          initial={{ opacity: 0, x: 5000 }}
          animate={filterOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 5000 }}
          transition={{ stiffness: 100, damping: 201, duration: 0.2 }}
          className="w-full h-full bg-white 600px:w-[600px] "
        >
          <div className="h-14 border-b flex items-center justify-end p-3 w-full border-black">
            <RxCross2
              onClick={() => setfilterOpen(false)}
              className="text-3xl cursor-pointer"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="   h-14 font-semibold text-[90%] 600px:text-[120%] border p-3 flex justify-between items-center border-black">
        <div className="max-600px:hidden">16 Items Found !</div>
        <div className="flex gap-4 max-600px:w-full items-center">
          <div onClick={() => setsortOpen(!sortOpen)} className="border-b h-7 cursor-pointer  w-[200px] 600px:w-[300px]  flex border-black  font-semibold relative">
            {props.priceFilter == "lowtohigh" && "Low to High"}
            {props.priceFilter == "hightolow" && "High to Low"}
            {props.priceFilter !== "lowtohigh" &&
              props.priceFilter !== "hightolow" &&
              "SORT BY"}

            <div
              
              className={`ml-auto transition-all duration-150 ${
                sortOpen && "rotate-90"
              }`}
            >
              <FaChevronRight size={22} />
            </div>
            {sortOpen && (
              <div className="absolute p-2 flex flex-col gap-3 top-10 z-20 rounded-b-md bg-white h-[120px] border border-black w-full">
                <div
                  onClick={() => {
                    props.setpriceFilter(null);
                    setsortOpen(false);
                  }}
                  className="text-[90%] font-medium cursor-pointer "
                >
                  Remove filter
                </div>
                <div
                  onClick={() => {
                    props.setpriceFilter("lowtohigh");
                    setsortOpen(false);
                  }}
                  className="text-[90%] font-medium cursor-pointer "
                >
                  Price (low to high)
                </div>
                <div
                  onClick={() => {
                    props.setpriceFilter("hightolow");
                    setsortOpen(false);
                  }}
                  className="text-[90%] font-medium cursor-pointer "
                >
                  Price (high to low)
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setfilterOpen(true)}
            className="h-8 600px:h-10 w-[100px] 600px:w-[150px] max-600px:ml-auto cursor-pointer text-white bg-black  flex justify-center items-center"
          >
            FILTER BY
          </div>
        </div>
      </div>
    </>
  );
};
