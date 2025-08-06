import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constats";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login/",
        { emailId, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      dispatch(addUser(res.data.user));

      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
    }
  };

  const handelSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup/",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token);
      dispatch(addUser(res.data.data));

      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
    }
  };

  return (
    <div className="relative bg-[url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold text-white text-center animate-pulse mb-10">
          {isLoginForm
            ? "Please Login To Enter the Developer's World"
            : "Please Sign Up To Enter the Developer's World"}
        </h1>

        <div className="card bg-base-200 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            <div className="form">
              {!isLoginForm && (
                <>
                  <label className="form-control w-full max-w-xs mb-4">
                    <div className="label py-3">
                      <span className="label-text">First Name</span>
                    </div>
                    <input
                      type="text"
                      value={firstName}
                      placeholder="Enter your First Name"
                      className="input input-bordered px-5 py-3"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label className="form-control w-full max-w-xs mb-4">
                    <div className="label py-3">
                      <span className="label-text">Last Name</span>
                    </div>
                    <input
                      type="text"
                      value={lastName}
                      placeholder="Enter your last Name"
                      className="input input-bordered px-5 py-3"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </>
              )}
              <label className="form-control w-full max-w-xs mb-4">
                <div className="label py-3">
                  <span className="label-text">Email Id</span>
                </div>
                <input
                  type="text"
                  value={emailId}
                  placeholder="Enter your email"
                  className="input input-bordered px-5 py-3"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs mb-6">
                <div className="label py-3">
                  <span className="label-text">Password</span>
                </div>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  className="input input-bordered px-5 py-3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <p className="text-red-500 font-bold">{error}</p>

            <div className="card-actions justify-center my-3">
              <button
                className="w-full bg-[#FF3B30] text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
                onClick={isLoginForm ? handleLogin : handelSignUp}
              >
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
              <p
                className="text-white font-bold cursor-pointer"
                onClick={() => setIsLoginForm((value) => !value)}
              >
                {isLoginForm
                  ? "New User? SignUp First"
                  : "Alredy a User?, Login"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
