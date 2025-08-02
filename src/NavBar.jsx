import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constats";
import axios from "axios";
import { removeUser } from "./utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await axios.post(BASE_URL + "logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/");
    } catch (err) {
      console.error("Error in logout", err);
    }
  };

  return (
    <div className="navbar bg-info-content shadow-sm">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          🧑‍💻 DevTinder
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-4 mr-4">
          <div className="text-base font-bold">Welcome, {user.firstName}</div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User avatar" src={user.photoUrl} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="cursor-pointer hover:bg-base-200 rounded w-full text-left">
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="cursor-pointer hover:bg-base-200 rounded w-full text-left">
                <a>Settings</a>
              </li>
              <li>
                <button
                  onClick={handelLogout}
                  className="curso-pointer hover:bg-base-200 rounded w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
