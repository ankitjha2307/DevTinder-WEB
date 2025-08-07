import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "./utils/constats";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./utils/userSlice";

const Body = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {});
      dispath(addUser(res.data));
    } catch (err) {
      if (err.status == 401) {
        navigate("/");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
