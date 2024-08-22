import React, { useState } from "react";

const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    dateOfBirth: "1990-01-01",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container  mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4 max-900px:grid-cols-1 w-4/5 mx-auto">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">First Name</p>
          {isEditMode ? (
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          ) : (
            <p>{user.firstName}</p>
          )}
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">Last Name</p>
          {isEditMode ? (
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          ) : (
            <p>{user.lastName}</p>
          )}
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">Email</p>

          <p>{user.email}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">Phone Number</p>
          {isEditMode ? (
            <input
              type="tel"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          ) : (
            <p>{user.phoneNumber}</p>
          )}
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">Date of Birth</p>
          {isEditMode ? (
            <input
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            />
          ) : (
            <p>{user.dateOfBirth}</p>
          )}
        </div>
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-600 font-semibold">Gender</p>
          {isEditMode ? (
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{user.gender}</p>
          )}
        </div>
      </div>
      <div className="flex mt-8 font-semibold justify-center mb-8">
        {/* <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="border border-black hover:bg-black hover:text-white  px-20 py-2 rounded"
        >
          {isEditMode ? "Save" : "Edit"}
        </button> */}
      </div>
    </div>
  );
};

export default UserProfile;
