import axios from "axios";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const AllProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [editOpen, seteditOpen] = useState(false);
  const [editproduct, seteditproduct] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/get-all-products"
      );
      setProducts(data.products || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/delete-product/${productId}`
      );
      if (res.data.success)
        setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {editOpen && (
        <Drawer
          getAllProducts={getAllProducts}
          editOpen={editOpen}
          seteditOpen={seteditOpen}
          seteditproduct={seteditproduct}
          editproduct={editproduct}
        />
      )}
      <div className="container mx-auto mt-8 overflow-y-scroll">
        <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
        {products.length ? (
          <div className="overflow-x-auto  max-700px:text-[80%] 800px:w-4/5 p-2 mx-auto">
            <table className="min-w-full bg-white border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Image
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Product ID
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Name
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Price
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Stock
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {product._id}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {product.title}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      ₹{product.price}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {product.stock}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      <div
                        to={`/edit-product/${product._id}`}
                        className="bg-yellow-500 m-1 cursor-pointer inline text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition duration-200"
                        onClick={() => {
                          seteditOpen(true);
                          seteditproduct(product);
                        }}
                      >
                        Edit
                      </div>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white m-1 px-2 py-1 rounded hover:bg-red-600 transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    <Link
                      to="/create-product"
                      className="bg-green-500 text-white px-4 py-2 rounded-full inline-block transition transform hover:bg-green-600 hover:scale-105 duration-200"
                    >
                      Add New Product
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <NoProductsFound />
        )}
      </div>
    </>
  );
};

export default AllProductsAdmin;

const NoProductsFound = () => {
  return (
    <div className="flex justify-center items-center pb-48 w-full h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="No Products"
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="text-2xl font-bold mb-2">No Products Found</p>
        <p className="text-gray-600 mb-4">
          It looks like there are no products at the moment.
        </p>
        <Link
          to={"/create-product"}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add New Product
        </Link>
      </div>
    </div>
  );
};

const categories = [
  "Select Category",
  "Kurta",
  "Saree",
  "T-shirt",
  "Jean",
  "Shirt",
];

const Drawer = ({
  seteditOpen,
  seteditproduct,
  editproduct,
  getAllProducts,
}) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [gender, setGender] = useState("all");
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState("");
  const [clothdetail, setclothdetail] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editproduct) {
      setImage(editproduct.images ? editproduct.images[0] : "");
      setTitle(editproduct.title || "");
      setPrice(editproduct.price || "");
      setStock(editproduct.stock || "");
      setGender(editproduct.gender || "all");
      setColors(editproduct.colors || []);
      setDescription(editproduct.description || "");
      setclothdetail(editproduct.clothdetail || "");
      setCategory(editproduct.category || "");
    }
  }, [editproduct]);

  const handleColorChange = (e) => {
    const { value } = e.target;
    if (!colors.includes(value)) {
      setColors([...colors, value]);
    }
  };

  const handleSave = async () => {
    const data = {
      title,
      price,
      stock,
      gender,
      colors,
      description,
      clothdetail,
      category,
    };

    const res = await axios.post("http://localhost:8000/update-product", {
      data,
      id: editproduct._id,
    });
    if (res.data.success) {
      toast.success(res.data.message);
      getAllProducts();
    } else toast.error(res.data.message);
    seteditOpen(false);
    seteditproduct(false);
  };

  return (
    <div className="w-full top-0 h-screen fixed flex justify-center items-center bg-[#00000063]">
      {" "}
      <Toaster />
      <div className="w-[90%] sm:w-[70%] md:w-[50%] h-[90%] sm:h-[80%] bg-white rounded-xl overflow-auto">
        <div className="w-full flex justify-end p-2">
          <RxCross2
            onClick={() => {
              seteditOpen(false);
              seteditproduct(false);
            }}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <div className="p-4">
          {image && (
            <div className="mb-4 flex justify-center">
              <img src={image} alt="Product" className="max-h-48 rounded" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Stock:</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Colors:</label>
            <input
              type="color"
              onChange={handleColorChange}
              className="w-full p-2 border rounded"
            />
            <div className="mt-2">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-block w-6 h-6 mr-2 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cloth Detail:</label>
            <textarea
              value={clothdetail}
              onChange={(e) => setclothdetail(e.target.value)}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
