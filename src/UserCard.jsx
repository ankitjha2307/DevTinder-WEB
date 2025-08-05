import axios from "axios";
import React from "react";
import { BASE_URL } from "./utils/constats";
import { useDispatch } from "react-redux";
import { removeFeed } from "./utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handelSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="text-white text-center">
      <img
        src={photoUrl}
        alt="User"
        className="w-36 h-36 object-cover rounded-xl border-2 border-white mx-auto mb-4"
      />

      <h2 className="text-xl font-bold mb-1">
        {firstName} {lastName}
      </h2>

      {(age || gender) && (
        <p className="text-white/70 text-sm mb-1">
          {age}, {gender}
        </p>
      )}

      <p className="italic text-white/70 text-sm mb-4">{about}</p>

      <div className="flex justify-center gap-4">
        <button
          className="btn btn-error"
          onClick={() => handelSendRequest("ignored", _id)}
        >
          Ignore
        </button>
        <button
          className="btn bg-purple-600 hover:bg-purple-800 text-white"
          onClick={() => handelSendRequest("intrested", _id)}
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default UserCard;
