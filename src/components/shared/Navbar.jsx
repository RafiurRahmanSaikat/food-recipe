import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>All Recepies</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className=" text-xl">Food Recipe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <button className="w-36 h-16 border-2 border-purple-500 text-sky-200 font-black rounded-full hover:text-white duration-300 relative group">
              <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-orange-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>

              <Link to={"/"}> All Recepies</Link>
            </button>
          </li>
          <li>
            <button className="w-36 h-16 border-2 border-purple-500 text-sky-200 font-black rounded-full hover:text-white duration-300 relative group">
              <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-orange-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
              <Link to={"/about"}>About Us</Link>
            </button>
          </li>
          <li>
            <li>
              <button className="w-36 h-16 border-2 border-purple-500 text-sky-200 font-black rounded-full hover:text-white duration-300 relative group">
                <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-orange-500 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
                <Link to={"/Contact"}>Contact Us</Link>
              </button>
            </li>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>AS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
