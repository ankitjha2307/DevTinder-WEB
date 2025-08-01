import React, { useState } from "react";
import NavBar from "./NavBar";

const Login = () => {
  const [emailId, SetEmailId] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <div className="flex flex-col items-center my-20">
      {/* Animated Heading */}
      <h1 className="text-2xl font-bold mb-10 text-center animate-pulse text-primary">
        Please Login/SignUp To Enter the Developer's World
      </h1>

      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <div className="form ">
            {/* Email Field */}
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label py-3">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Enter your email"
                className="input input-bordered px-5 py-3"
                onChange={(e) => SetEmailId(e.target.value)}
              />
            </label>

            {/* Password Field */}
            <label className="form-control w-full max-w-xs mb-6">
              <div className="label py-3">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered px-5 py-3"
                onChange={(e) => SetEmailId(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-center my-3">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
