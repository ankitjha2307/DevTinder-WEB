import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="navbar bg-info-content shadow-md">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl">
          <span className="text-white">🧑‍💻 Dev</span>
          <span className="text-red-600">Tinder</span>
        </Link>
      </div>

      {user && (
        <div className="flex items-center gap-4 mr-4">
          <div className="text-base font-bold text-white">
            Welcome, {user.firstName}
          </div>

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-400">
                <img alt="User avatar" src={user.photoUrl} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white rounded-xl w-56 border border-gray-100 animate-fade-in"
            >
              <li>
                <Link
                  to="/profile"
                  className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-red-50 transition"
                >
                  <span className="font-medium text-gray-700">Profile</span>
                  <span className="badge badge-primary">New</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/connections"
                  className="block px-3 py-2 rounded-lg hover:bg-pink-50 transition font-medium text-gray-700"
                >
                  Connections
                </Link>
                <Link
                  to="/request"
                  className="block px-3 py-2 rounded-lg hover:bg-pink-50 transition font-medium text-gray-700"
                >
                  Requestes
                </Link>
              </li>
              <li>
                <button
                  onClick={handelLogout}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 transition font-medium text-red-500"
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
