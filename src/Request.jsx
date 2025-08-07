import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "./utils/constats";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "./utils/requestSlice";

const Request = () => {
  const Requestes = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const rivewRequest = async (status, _id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        BASE_URL + "request/review/" + status + "/" + _id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRequest = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(BASE_URL + "user/request/recived", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!Requestes) return <h1>Loading...</h1>;
  if (Requestes.length === 0)
    return <h1 className="text-center mt-10">No Connection Found</h1>;

  return (
    <div className="flex justify-center py-20 relative min-h-screen bg-gradient-to-br from-white-900 via-blue-800 to-r-700">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="flex flex-col items-center gap-6 mt-10 px-4">
        <h1 className="font-bold text-3xl text-white">Requestes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {Requestes.map((request) => {
            const { _id, firstName, lastName, photoUrl, about, gender, age } =
              request.fromUserId;

            return (
              <div
                key={request._id || request.id}
                className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform border border-white/20"
              >
                <img
                  alt={`${firstName} ${lastName}`}
                  src={photoUrl || "/default-avatar.png"}
                  className="w-24 h-24 rounded-full object-cover border-2 border-red-400 shadow-md"
                />
                <h2 className="mt-3 font-semibold text-lg text-red-400">
                  {firstName} {lastName}
                </h2>
                <p className="mt-1 text-blue-200 text-sm">
                  {about || "No bio available"}
                </p>
                {age && gender && (
                  <p className="mt-1 text-gray-300 text-sm">
                    {age + ", " + gender || "age and gender"}
                  </p>
                )}

                {/* Buttons UI */}
                <div className="flex gap-4 mt-4">
                  <button
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-800 text-white"
                    onClick={() => rivewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-800 text-white"
                    onClick={() => rivewRequest("accepted", request._id)}
                  >
                    Accepted
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Request;
