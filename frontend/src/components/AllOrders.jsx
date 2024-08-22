// src/components/Allorder.jsx

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllOrders = () => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    try {
      const getAllOrders = async () => {
        const { data } = await axios.get("http://localhost:8000/get-all-orders");
        setorders(data.orders||[])
      };
      getAllOrders()
    } catch (error) {
      console.log(error.message)
    }
  }, []);

  return (
    <>
      {orders.length ? (
        <div className="container mx-auto mt-8">
          <div className="overflow-x-auto max-700px:text-[80%] 800px:w-4/5 p-2 mx-auto">
            <table className="min-w-full bg-white border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Order ID
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Customer Name
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Product
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Quantity
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Price
                  </th>
                  <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {order._id}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {order?.user?.name}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {order?.cart?.length}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {order.quantity}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    ₹{order.cart.reduce((total,a)=>{return total+a.price},0)}
                    </td>
                    <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <NoOrdersFound />
      )}
    </>
  );
};

export default AllOrders;

const NoOrdersFound = () => {
  return (
    <div className="flex  justify-center  items-center pb-48 w-full h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="No Orders"
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="text-2xl font-bold mb-2"> No Orders Found</p>
        <p className="text-gray-600 mb-4">
          It looks like there are no orders at the moment.
        </p>
        <Link
          to={"/products"}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          // Adjust the action as needed
        >
          Go Back to Shop
        </Link>
      </div>
    </div>
  );
};
