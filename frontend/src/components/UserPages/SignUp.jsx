import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { signupAPI } from "../../api";

const SignUp = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const validateName = (name) => {
    if (!validator.isAlpha(name)) {
      return "Name must contain only letters";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!validator.isLength(password, { min: 8 })) {
      return "Password must be at least 8 characters long";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one digit";
    }
    return "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  useEffect(() => {
    const nameError = validateName(userDetails.name);
    const emailError = validateEmail(userDetails.email);
    const passwordError = validatePassword(userDetails.password);
    const confirmPasswordError = validateConfirmPassword(userDetails.password, userDetails.confirmPassword);

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError
    });

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSignup = async () => {
    if (isButtonEnabled) {
      try {
        let userinfo ={
            "email": userDetails.email,
            "password": userDetails.password,
             "name": userDetails.name
        }
        let resp = await signupAPI(userinfo);
        console.log(resp);
        alert(resp.data.message)
        navigate("/");
      } catch (error) {
        alert(error);
        console.error("Error in registering user", error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userDetails.name}
                    onChange={handleChange}
                  />
                  {(errors.name && userDetails.name !== "") && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                  
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                  {(errors.email && userDetails.email !== "") && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={userDetails.password}
                    onChange={handleChange}
                  />
                  {(errors.password && userDetails.password !== "") && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
                  
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={userDetails.confirmPassword}
                    onChange={handleChange}
                  />
                  {(errors.confirmPassword && userDetails.confirmPassword !== "") && <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>}
                  
                  <button
                    className={`mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${isButtonEnabled ? "hover:bg-indigo-700" : "bg-indigo-300 cursor-not-allowed"}`}
                    disabled={!isButtonEnabled}
                    onClick={handleSignup}
                  >
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className="mt-4">Already have an Account? <a href="/" className="text-blue-500">Login</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat signup-bg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
