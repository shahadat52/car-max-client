import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("User Log Out", "", "success");
      })
      .catch((error) => {
        Swal.fire("Opps!", error.message, "error");
      });
  };

  return (
    <div>
      <div className="px-4 py-5 mx-auto bg-[#5e78aa] text-white md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="CarMax"
            title="CarMax"
            className="inline-flex items-center "
          >
            <img className="w-16 rounded-md" src={logo} alt="" />
            <span className="ml-2 text-4xl  font-bold tracking-wide text-amber-200 ">
              CarMax
            </span>
          </Link>

          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="home"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/myOrders"
                aria-label="My Orders"
                title="My Orders"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="addCar"
                aria-label="Add Car"
                title="Add Car"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Add Car
              </NavLink>
            </li>
            <li>
              <NavLink
                to="dashboard"
                aria-label="Dashboard"
                title="Dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li onClick={handleLogOut}>
              <NavLink
                to=""
                aria-label="Log Out"
                title="Log Out"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Log Out
              </NavLink>
            </li>
            <li>
              <img
                aria-label="FAQ"
                title={user?.displayName}
                className="w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </li>
            <li>
              <NavLink
                to="/login"
                aria-label="Login"
                title="Log In"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : " tracking-wide text-gray-50   transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Log In
              </NavLink>
            </li>
          </ul>
          <div className="lg:hidden mb-[420px] md:mb-[420px] lg:mb-2">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="CarMax"
                        title="CarMax"
                        className="inline-flex items-center"
                      >
                        <img className="w-16 rounded-md" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          CarMax
                        </span>
                      </Link>
                    </div>

                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <img
                          aria-label="FAQ"
                          title={user?.displayName}
                          className="w-10 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </li>
                      <li>
                        <NavLink
                          to="home"
                          aria-label="Home"
                          title="Home"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-gray-700   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/myOrders"
                          aria-label="My Orders"
                          title="My Orders"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-gray-700   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          My Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="blog"
                          aria-label="blog"
                          title="Blog"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-gray-700   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="addCar"
                          aria-label="Add Car"
                          title="Add Car"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-gray-700   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Add Car
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="dashboard"
                          aria-label="Dashboard"
                          title="Dashboard"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-black   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Dashboard
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/login"
                          aria-label="Login"
                          title="Log In"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-black   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Log In
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to=""
                          aria-label="Log Out"
                          title="Log Out"
                          className={({ isActive }) =>
                            isActive
                              ? "font-bold text-lg tracking-wide text-amber-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : " tracking-wide text-gray-700   transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Log Out
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
