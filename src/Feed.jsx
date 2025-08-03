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
    try {
      const res = await axios.get(BASE_URL + "feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed &&
    feed.data && (
      <div className="flex justify-center py-20 relative bg-[url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-black opacity-65 z-0" />

        <div className="relative z-10 flex flex-col items-center space-y-6">
          {/* Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-4 rounded-2xl shadow-2xl w-[350px] max-h-[420px] overflow-hidden">
            <UserCard user={feed.data[1]} />
          </div>
        </div>
      </div>
    )
  );
};

export default Feed;
