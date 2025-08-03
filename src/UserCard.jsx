import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

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
        <button className="btn btn-outline btn-error">Ignore</button>
        <button className="btn bg-purple-600 hover:bg-purple-800 text-white">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default UserCard;
