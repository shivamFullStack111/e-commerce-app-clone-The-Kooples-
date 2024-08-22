// src/components/AllUsers.jsx
import axios from "axios";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setusers] = useState([]);

  const handleDelete = (id) => {
    // Add your delete logic here
    console.log(`User with ID ${id} deleted`);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/get-all-users");
      setusers(data.users||[]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {users.length && (
        <div className="overflow-x-auto max-700px:text-[80%] 800px:w-4/5 p-2 mx-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                  User ID
                </th>
                <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                  Name
                </th>
                <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                  Email
                </th>
                <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                  Role
                </th>
                <th className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 800px:px-2 px-2 py-2 800px:py-2">
                    {user._id}
                  </td>
                  <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    {user.name}
                  </td>
                  <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                   {user.isadmin?'Admin':'User'}
                  </td>
                  <td className="border border-gray-300 800px:px-4 px-2 py-2 800px:py-2">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
