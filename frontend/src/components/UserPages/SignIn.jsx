import React, { useState, useEffect } from "react";
import validator from "validator";
import { loginAPI } from "../../api";
import { useNavigate} from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  useEffect(() => {
    const emailError = validateEmail(loginDetails.email);
    const passwordError = loginDetails.password ? "" : "Password is required";

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (!emailError && !passwordError) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [loginDetails]);

  const handleSignIn = async () => {
    if (isButtonEnabled) {
      try {
         let logindata ={
            "email":loginDetails.email,
            "password": loginDetails.password
         }
         let resp = await loginAPI(logindata);
         localStorage.setItem("accessToken",resp.data.accessToken);
         localStorage.setItem("refreshToken",resp.data.refreshToken);
         localStorage.setItem("userId",resp.data.id);
         navigate("/dashboard");
      } catch (error) {
         alert(error.message);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginDetails.email}
                    onChange={handleChange}
                  />
                  {(errors.email && loginDetails.email !== "") && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginDetails.password}
                    onChange={handleChange}
                  />
                  {(errors.password && loginDetails.password !=="") && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
                  
                  <button
                    className={`mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${isButtonEnabled ? "hover:bg-indigo-700" : "bg-indigo-300 cursor-not-allowed"}`}
                    disabled={!isButtonEnabled}
                    onClick={handleSignIn}
                  >
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <div className="mt-4">Don't have an Account? <a href="/register" className="text-blue-500">Register</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat signin-bg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
