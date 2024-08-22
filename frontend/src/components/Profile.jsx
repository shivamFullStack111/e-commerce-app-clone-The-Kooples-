import { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [active, setactive] = useState(1)
  return (
    <>
      <HeaderPage />
      {!isAuthenticated && <Login />}

      {isAuthenticated && <div className="flex h-[95vh] 1200px:h-[85vh] overflow-hidden">
         <ProfileSidebar setactive={setactive}></ProfileSidebar>
         {active==1&&<UserProfile/>}
         {active==2&&<AllOrders />}
         {active==3&&<AllUsers/>}
         {active==4&&<AllProductsAdmin/>}
         {active==5&&<SettingsPage/>}
      </div>}
    </>
  );
};

export default Profile;

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { setisAuthenticated, setuser } from "../store/slices/userSlice";
import { checkValidations } from "../store/utils/ClientActions";
import ProfileSidebar from "./ProfileSidebar";
import AllOrders from "./AllOrders";
import AllUsers from "./AllUsers";
import UserProfile from "./UserProfile";
import SettingsPage from "./SettingPage";
import AllProductsAdmin from "./AllProductsAdmin";

const Login = () => {
  const dispatch = useDispatch();
  const [loginOrSignin, setloginOrSignin] = useState("Login");
  const [gender, setgender] = useState(null);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [dateofbirth, setdateofbirth] = useState(null);
  const [phonenumber, setphonenumber] = useState(null);
  const [error, seterror] = useState(null);

  const handleregister = async () => {
    try {
      const isvalid = checkValidations({
        name,
        email,
        password,
        confirmpassword,
        dateofbirth,
        lastname,
        gender,
        phonenumber,
      });

      if (!isvalid.success) {
        if (isvalid.type === "passwordnotmatch")
          toast.error("password and confirm password are not match");
        seterror(isvalid);
      } else {
        seterror(null);
        const res = await axios.post("http://localhost:8000/register", {
          name,
          email,
          password,
          confirmpassword,
          dateofbirth,
          lastname,
          gender,
          phonenumber,
        });
        if (res.data.success) {
          toast.success("Registration successful");
          Cookies.set("LOGIN_TOKEN", JSON.stringify(res.data.token));
          dispatch(setisAuthenticated(true));
          dispatch(setuser(true));
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlelogin = async () => {
    try {
      if (!email)
        return seterror({
          success: false,
          type: "email",
          message: "email is required",
        });
      if (!password)
        return seterror({
          success: false,
          type: "password",
          message: "password is required",
        });

      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(res.data);

      if (res.data.success) {
        toast.success("Login successful");
        Cookies.set("LOGIN_TOKEN", JSON.stringify(res.data.token));
        dispatch(setisAuthenticated(true));
        dispatch(setuser(true));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {" "}
      <Toaster containerClassName="text-[80%]" />
      <div className="h-16 border-b items-center border-black flex justify-center text-[120%]">
        <span
          className="hover:text-gray-500 cursor-pointer"
          onClick={() => {
            setloginOrSignin("Login");
            seterror(null);
          }}
        >
          LOGIN
        </span>{" "}
        /{" "}
        <span
          className="hover:text-gray-500 cursor-pointer"
          onClick={() => {
            setloginOrSignin("Sign In");
            seterror(null);
          }}
        >
          SIGN IN
        </span>
      </div>
      <div className="min-h-[60vh] w-full flex justify-center ">
        <div className=" w-full  1000px:w-[80%] 1400px:w-[60%]  flex flex-col items-center  mt-10 mb-10">
          <p className="text-center font-bold text-[160%] w-full  p-2">
            {loginOrSignin}
          </p>

          <div className="w-full  font-medium p-4">
            <div className="text-[120%]">
              <p>
                Enter email address <span className="text-red-400">*</span>
              </p>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="w-full font-normal h-10 border-b border-black outline-none "
                placeholder="Enter your email address"
                type="email"
              />
              {error?.type === "email" && (
                <p className="text-red-500  text-[15px]">{error.message}</p>
              )}
            </div>
            {loginOrSignin == "Sign In" && (
              <>
                <div className="flex mt-4  1000px:mt-6 items-center gap-4  1000px:gap-8">
                  <div className="flex items-center">
                    <p
                      onClick={() => setgender("male")}
                      className={`w-7 h-7 border-2 border-black cursor-pointer ${
                        gender === "male" && "bg-black"
                      } rounded-full mr-2`}
                    ></p>{" "}
                    <p className="text-[120%] font-semibold">Mr</p>
                  </div>
                  <div className="flex items-center">
                    <p
                      onClick={() => setgender("female")}
                      className={`w-7 h-7 border-2 border-black cursor-pointer ${
                        gender === "female" && "bg-black"
                      } rounded-full mr-2`}
                    ></p>{" "}
                    <p className="text-[120%] font-semibold">Mrs</p>
                  </div>
                </div>

                {error?.type === "gender" && (
                  <p className="text-red-500  text-[15px]">{error.message}</p>
                )}
              </>
            )}
            <div
              className={`grid grid-cols-1 ${
                loginOrSignin == "Sign In" && "600px:grid-cols-2 "
              } gap-10   mt-8 gap-6`}
            >
              {loginOrSignin == "Sign In" && (
                <>
                  <div className="text-[120%] flex flex-col items-center w-[100%]">
                    <p className="mr-auto">
                      First Name <span className="text-red-400">*</span>
                    </p>
                    <input
                      onChange={(e) => setname(e.target.value)}
                      className="w-full font-normal h-10 border-b border-black outline-none "
                      placeholder="Enter your first name"
                      type="email"
                    />
                    {error?.type === "name" && (
                      <p className="text-red-500  text-[15px]">
                        {error.message}
                      </p>
                    )}
                  </div>
                  <div className="text-[120%] flex flex-col items-center w-[100%]">
                    <p className="mr-auto">
                      Last Name <span className="text-red-400"></span>
                    </p>
                    <input
                      onChange={(e) => setlastname(e.target.value)}
                      className="w-full font-normal h-10 border-b border-black outline-none "
                      placeholder="Enter your Last name"
                      type="email"
                    />
                    {error?.type === "lastname" && (
                      <p className="text-red-500  text-[15px]">
                        {error.message}
                      </p>
                    )}
                  </div>
                  <div className="text-[120%] flex flex-col items-center w-[100%]">
                    <p className="mr-auto">
                      Date of birth
                      <span className="text-red-400"></span>
                    </p>
                    <input
                      onChange={(e) => setdateofbirth(e.target.value)}
                      className="w-full font-normal h-10 border-b border-black outline-none "
                      type="date"
                    />
                    {error?.type === "dateofbirth" && (
                      <p className="text-red-500  text-[15px]">
                        {error.message}
                      </p>
                    )}
                  </div>
                  <div className="text-[120%] mt-1 flex flex-col items-center w-[100%]">
                    <p className="mr-auto">
                      Phone number <span className="text-red-400"></span>
                    </p>
                    <PhoneInput
                      country={"us"}
                      value={phonenumber}
                      onChange={(phone) => setphonenumber(phone)}
                      enableSearch={true}
                      disableSearchIcon={true}
                      containerClass="phone-input"
                      inputStyle={{
                        width: "100%",
                      }}
                      inputClass="phone-input"
                    />
                    {error?.type === "phonenumber" && (
                      <p className="text-red-500  text-[15px]">
                        {error.message}
                      </p>
                    )}
                  </div>
                </>
              )}
              <div className="text-[120%] flex flex-col items-center w-[100%]">
                <p className="mr-auto">
                  Enter password <span className="text-red-400">*</span>
                </p>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full font-normal h-10 border-b border-black outline-none "
                  placeholder="Enter password"
                  type="password"
                />
                {error?.type === "password" && (
                  <p className="text-red-500  text-[15px]">{error.message}</p>
                )}
              </div>
              {loginOrSignin == "Sign In" && (
                <div className="text-[120%] flex flex-col items-center w-[100%]">
                  <p className="mr-auto">
                    Enter confirm password{" "}
                    <span className="text-red-400">*</span>
                  </p>
                  <input
                    onChange={(e) => setconfirmpassword(e.target.value)}
                    className="w-full font-normal h-10 border-b border-black outline-none "
                    placeholder="Enter confirm password"
                    type="password"
                  />
                  {error?.type === "confirmpassword" && (
                    <p className="text-red-500  text-[15px]">{error.message}</p>
                  )}
                </div>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="mt-8 h-12 w-44 hover:bg-black hover:text-white border-2 border-black text-[130%] font-semibold"
                type="button"
                onClick={
                  loginOrSignin == "Login" ? handlelogin : handleregister
                }
              >
                {loginOrSignin}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
