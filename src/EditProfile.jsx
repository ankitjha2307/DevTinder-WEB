import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "./utils/constats";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [emailId, setEmailId] = useState(user.emailId);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [showTost, setShowTost] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        BASE_URL + "profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          emailId,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(addUser(res?.data?.data));
      setShowTost(true);
      setTimeout(() => setShowTost(false), 3000);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="relative bg-[url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-65 z-0 " />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center py-6 px-4 ">
        <div className="flex flex-col md:flex-row flex-wrap items-start justify-center gap-10">
          {/* Edit Profile Form */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-8 rounded-2xl shadow-2xl w-[400px]">
            <h2 className="text-2xl font-bold text-center mb-3">
              Edit Profile
            </h2>

            <form
              className="space-y-2"
              onSubmit={(e) => {
                e.preventDefault();
                saveProfile();
              }}
            >
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                placeholder="First Name"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setLastName(e.target.value)}
              />

              {/* <label>Email Id</label>
              <input
                type="text"
                value={emailId}
                disabled
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30"
              /> */}

              <label>Photo Url</label>
              <input
                type="text"
                value={photoUrl}
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />

              <label>Age</label>
              <input
                type="number"
                value={age}
                placeholder="Age"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setAge(e.target.value)}
              />

              <label>Gender</label>
              <input
                type="text"
                value={gender}
                placeholder="Gender"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setGender(e.target.value)}
              />

              <label>About</label>
              <input
                type="text"
                value={about}
                placeholder="About You"
                className="input input-bordered w-full bg-white/20 placeholder:text-white/70 text-white border-white/30 focus:ring-2 focus:ring-red-500"
                onChange={(e) => setAbout(e.target.value)}
              />

              <button
                type="submit"
                className="btn bg-red-600 hover:bg-red-800 text-white w-full mt-3"
              >
                Save Profile
              </button>

              {error && (
                <div className="text-red-400 text-sm text-center mt-2">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Preview Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-6 rounded-2xl shadow-2xl w-[350px]">
            <UserCard
              user={{
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about,
              }}
            />
          </div>

          {/* Toast Notification */}
          {showTost && (
            <div className="toast toast-top toast-center">
              <div className="alert alert-success">
                <span>Profile Saved</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
