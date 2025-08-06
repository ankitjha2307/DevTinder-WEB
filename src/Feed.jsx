import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "./utils/constats";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "./utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(BASE_URL + "feed", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || !feed.data) return null;

  return (
    <div className="flex justify-center py-20 relative min-h-screen bg-gradient-to-br from-white-900 via-blue-800 to-r-700">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-4 rounded-2xl shadow-2xl w-[350px] max-h-[420px] overflow-hidden">
          {feed.data.length > 0 ? (
            <UserCard user={feed.data[0]} />
          ) : (
            <p className="text-center text-lg font-semibold">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
