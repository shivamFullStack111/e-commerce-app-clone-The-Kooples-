import { useEffect, useState } from "react";
import Footer from "./Footer";
import HeaderPage from "./HeaderPage";
import { BiImageAdd } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { checkProductValidation } from "../store/utils/ClientActions";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setloading } from "../store/slices/userSlice";
import Loader from "./Loader";

const categories = [
  "Select Category",
  "Kurta",
  "Saree",
  "T-shirt",
  "Jean",
  "Shirt",
];

const genders = ["Select gender", "Male", "Female", "All"];

const CreateProduct = () => {
  const [imageOpen, setimageOpen] = useState(false);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(null);
  const [category, setcategory] = useState("");
  const [gender, setgender] = useState("");
  const [stock, setstock] = useState("");
  const [colors, setcolors] = useState([]);
  const [material, setmaterial] = useState("");
  const [images, setimages] = useState([]);
  const [description, setdescription] = useState("");
  const [clothdetail, setclothdetail] = useState("");
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  const handlefilechange = (e) => {
    const files = Array.from(e.target.files);
    let newimages = [];

    files.forEach((file) => {
      if (
        !images.some((img) => img.name == file.name && img.size == file.size)
      ) {
        newimages.push(file);
      }
    });

    setimages((prev) => [...prev, ...newimages]);
  };

  const handlesubmit = async () => {
    setloading(true);

    const isvalid = checkProductValidation({
      title,
      price,
      category,
      gender,
      stock,
      images,
      description,
      clothdetail,
    });
    if (!isvalid.success) {
      return seterror(isvalid);
    }

    const formdata = new FormData();
    images.forEach((image, index) => {
      formdata.append("file", image);
    });
    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("category", category);
    formdata.append("gender", gender);
    formdata.append("stock", stock);
    formdata.append("clothdetail", clothdetail);
    formdata.append("description", description);
    formdata.append("material", material);
    colors.forEach((clr) => formdata.append("colors", clr));

    const res = await axios.post(
      "http://localhost:8000/create-product",
      formdata
    );
    if (res.data.success) {
      toast.success("product created successfully");
    }
    setloading(false);
    seterror(null);
  };

  return (
    <>
    {loading&&<div className="w-full h-screen fixed top-0 right-0 ">
      <Loader></Loader>
      </div>}
      <Toaster />
      {imageOpen && (
        <div className="w-full h-screen fixed z-50 bg-[#0007] flex justify-center items-center">
          <div className="w-full h-full 1000px:w-[900px] 1000px:h-[700px]   bg-white shadow-2xl">
            <div className="text-center flex justify-between items-center text-[200%] border-b border-black p-2 font-semibold">
              {" "}
              <p className="h-1"></p> <p className="">Selected Images</p>{" "}
              <RxCross2
                onClick={() => setimageOpen(false)}
                className="cursor-pointer"
                size={35}
              />
            </div>
            <div className=" grid-cols-2 1000px:grid-cols-3 flex justify-center gap-3 p-3">
              {images &&
                images.map((img, i) => (
                  <img
                    key={i}
                    className="w-full"
                    src={URL.createObjectURL(img)}
                    alt=""
                  />
                ))}
            </div>
          </div>
        </div>
      )}
      <HeaderPage />
      <div className="min-h-[800px] flex flex-col items-center border-b-2 border-black pb-20">
        <p className="text-center text-[200%] font-bold mt-6">Create Product</p>
        <div className="w-full 1000px:w-[70%] 1500px:w-[50%] border text-[125%] border-black min-h-[600px] mt-4 ">
          <div className=" grid grid-cols-1 650px:grid-cols-2 gap-10 p-4">
            <div className="  h-min ">
              <p className="font-semibold">Enter Title</p>
              <input
                onChange={(e) => settitle(e.target.value)}
                className="outline-none border-b w-full border-gray-700"
                type="text"
                placeholder="Enter product title"
              />
              {error?.type == "title" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
            <div className="  h-min ">
              <p className="font-semibold">Enter price in ( ₹ ) Rupee</p>
              <input
                onChange={(e) => setprice(e.target.value)}
                className="outline-none border-b w-full border-gray-700"
                type="number"
                min={0}
                max={100000}
                placeholder="Enter product price"
              />
              {error?.type === "price" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
          </div>
          <div className=" grid grid-cols-1 650px:grid-cols-2 gap-10 p-4">
            <div className="  h-min ">
              <p className="font-semibold">Select Category</p>
              <select
                onChange={(e) => setcategory(e.target.value)}
                className="outline-none border-b cursor-pointer w-full border-gray-700"
                type="text"
              >
                {categories.map((cat) => (
                  <option
                    className="cursor-pointer hover:bg-black hover:text-white"
                    key={cat}
                  >
                    {cat}
                  </option>
                ))}
              </select>
              {error?.type == "category" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
            <div className="  h-min ">
              <p className="font-semibold">Select gender</p>
              <select
                onChange={(e) => setgender(e.target.value)}
                className="outline-none border-b w-full border-gray-700"
                type="number"
                placeholder="Select gender"
              >
                {genders.map((cat) => (
                  <option
                    defaultValue={"Male"}
                    className="cursor-pointer hover:bg-black hover:text-white"
                    key={cat}
                  >
                    {cat}
                  </option>
                ))}
              </select>
              {error?.type == "gender" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
          </div>
          <div className=" grid grid-cols-1 650px:grid-cols-2 gap-10 p-4">
            <div className="  h-min ">
              <p className="font-semibold">Enter stock</p>
              <input
                onChange={(e) => setstock(e.target.value)}
                className="outline-none border-b w-full border-gray-700"
                type="number"
                placeholder="Enter availabe stock"
              />
              {error?.type == "stock" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
            <div className="  h-min ">
              <p className="font-semibold">Select availabe colors</p>
              <div className="flex gap-1">
                {colors &&
                  colors.map((clr) => (
                    <div
                      key={clr}
                      style={{ backgroundColor: clr }}
                      className={`   h-6 w-6 rounded-full`}
                    >
                      .
                    </div>
                  ))}
              </div>
              <input
                onBlur={(e) => {
                  if (!colors?.includes(e.target.value)) {
                    setcolors([...colors, e.target.value]);
                  }
                }}
                className="outline-none border-b w-full border-gray-700"
                type="color"
                placeholder="Select size"
              />
            </div>
          </div>
          <div className=" grid grid-cols-1 650px:grid-cols-2 gap-10 p-4">
            <div className="  h-min ">
              <p className="font-semibold">Enter material</p>
              <input
                onChange={(e) => setmaterial(e.target.value)}
                className="outline-none border-b w-full border-gray-700"
                type="text"
                placeholder="Enter material of cloth"
              />
            </div>
            <div className="  h-min ">
              <p className="font-semibold">Select images</p>
              <label htmlFor="image">
                <BiImageAdd
                  size={40}
                  className="outline-none  border-b w-full border-gray-700"
                />
              </label>
              <input
                id="image"
                className="outline-none hidden border-b w-full border-gray-700"
                type="file"
                multiple
                onChange={handlefilechange}
              />
              {error?.type == "images" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
              <div className="flex justify-center">
                <button
                  onClick={() => setimageOpen(true)}
                  className="h-10 relative w-28 text-[80%] font-semibold mt-6 border border-black hover:text-white hover:bg-black"
                >
                  View images
                  <span className="absolute h-5 text-white bg-[#f04848] rounded-full w-5 flex justify-center items-center -right-2 bottom-7">
                    {images.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-1 650px:grid-cols-2 gap-10 p-4">
            <div className="  h-min ">
              <p className="font-semibold">Enter description</p>
              <textarea
                onChange={(e) => setdescription(e.target.value)}
                rows={4}
                className="outline-none resize-none border-b w-full border-gray-700"
                type="text"
                placeholder="Enter description in brief"
              />
              {error?.type == "description" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>

            <div className="  h-min ">
              <p className="font-semibold">Detail about cloth </p>
              <textarea
                onChange={(e) => setclothdetail(e.target.value)}
                rows={4}
                className="outline-none resize-none border-b w-full border-gray-700"
                type="text"
                placeholder="Enter detail about cloth "
              />
              {error?.type == "clothdetail" && (
                <p className="text-red-500 text-[15px] ">{error?.message}</p>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center mt-6">
            <button
              type="button"
              onClick={handlesubmit}
              className="w-[80%] h-12 border border-black hover:text-white mb-6 hover:bg-black"
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateProduct;
