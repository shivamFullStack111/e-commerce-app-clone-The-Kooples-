import  { useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { saveAddress } from "../store/utils/ClientActions";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const AddressPage = () => {
  const { user } = useSelector((state) => state.user);
  const navigate=useNavigate()
  const [address, setaddress] = useState("");
  const [streetaddress, setstreetaddress] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [phonenumber2, setphonenumber2] = useState("");

  useEffect(() => {
    setname(user?.name);
    setemail(user?.email);
    setphonenumber(user?.phonenumber);
  }, [user]);

  const handleSubmitAddress = async () => {
    const res = await saveAddress({
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
    });
    if (res?.success) {
      toast.success("Address saved successfully");
      navigate('/payment')
    } else {
      console.log(res.message);
      toast.error(res?.message);
    }
  };

  return (
    <div className="w-full min-h-screen max-600px:mt-12 mb-4 flex flex-col justify-center items-center">
      {" "}
      <Toaster />
      <div className="w-[90%] 600px:w-[80%] 1100px:w-[60%] 1450px:w-[50%] 1600px:w-[40%]">
        <div className="w-full bg-[#dfdbdb] min-h-[80px] relative flex justify-center items-center mb-3 rounded-t-xl ">
          <p className="w-full p-4">
            <Link to={"/cart"}>
              <FaArrowLeftLong size={25} />
            </Link>
          </p>
          <p className="absolute -top-10 text-[300%] font-semibold text-shadow-xl-blue ">
            Address
          </p>
        </div>
        <div className="w-full min-h-[570px] max-600px:pb-3 600px:gap-2 600px:h-[550px] border border-black flex flex-col  items-center">
          <div className="grid grid-cols-1 600px:grid-cols-2  gap-6 p-4 w-full justify-evenly ">
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Address</p>
              <input
                onChange={(e) => setaddress(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter Address"
                type="text"
              />
            </div>
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Street address</p>
              <input
                className="outline-none border-b border-black"
                placeholder="Enter Street address (Optional)"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 600px:grid-cols-2 gap-6 p-4 w-full justify-evenly ">
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Name</p>
              <input
                onChange={(e) => setname(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter name"
                type="text"
                value={name}
              />
            </div>
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Email</p>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="outline-none border-b border-black"
                placeholder="Enter Email"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 600px:grid-cols-2 gap-6 p-4 w-full justify-evenly ">
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Country</p>
              <select
                onClick={(e) => setcountry(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter name"
                type="text"
              >
                {Country?.getAllCountries().map((country, i) => (
                  <option
                    value={country.isoCode}
                    key={i}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    {country?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">State</p>
              <select
                onClick={(e) => setstate(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter name"
                type="text"
              >
                {State?.getStatesOfCountry(country)?.map((state, i) => (
                  <option
                    value={state.name}
                    key={i}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    {state?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 600px:grid-cols-2 gap-6 p-4 w-full justify-evenly ">
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">City</p>
              <input
                onChange={(e) => setcity(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter city name"
                type="text"
              />
            </div>
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Postalcode / Pincode</p>
              <input
                onChange={(e) => setpincode(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter Postalcode / Pincode"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 600px:grid-cols-2 gap-6 p-4 w-full justify-evenly ">
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Phone number</p>
              <input
                onChange={(e) => setphonenumber(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter phone number"
                type="text"
                value={phonenumber}
              />
            </div>
            <div className=" flex flex-col h-min text-[120%] font-semibold">
              <p className="text-[90%]">Alternate Phone Number</p>
              <input
                onChange={(e) => setphonenumber2(e.target.value)}
                className="outline-none border-b border-black"
                placeholder="Enter alternate Phone Number"
                type="text"
              />
            </div>
          </div>
          <div
            onClick={handleSubmitAddress}
            className="w-[98%] flex justify-center items-center text-[140%] font-semibold hover:bg-slate-800 600px:mt-5 cursor-pointer rounded-3xl h-12 bg-slate-700 text-white"
          >
            CONTINUE TO PAY
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
