import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [openSubMenu, setOpenSubMenu] = useState("");

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? "" : menuName);
  };

  return (
    <div
      className={`bg-gray-300 h-screen p-4 ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      {/* Logo */}
      {!isCollapsed && (
        <div className="text-center text-xl mb-6 font-bold text-black">
          ASL10
        </div>
      )}
      <button onClick={toggleSidebar} className="mb-6 text-black">
        {isCollapsed ? "▶" : "◀"}
      </button>

      {/* Menu Items */}
      <ul>
        <li className="flex items-center mb-4 text-black">
          {!isCollapsed && (
            <Link
              to="/dashboard"
              className="ml-2 text-black visited:text-black hover:text-black no-underline inline-block"
            >
              Dashboard
            </Link>
          )}
        </li>

        <li className="flex items-center mb-4 text-black">
          {!isCollapsed && (
            <Link to="/orders" className="ml-2 text-black no-underline">
              Orders
            </Link>
          )}
        </li>

        <li className="flex items-center mb-4 text-black">
          {!isCollapsed && (
            <Link to="/dispatch" className="ml-2 text-black no-underline">
              Dispatch
            </Link>
          )}
        </li>

        {/* Route with Submenu */}
        <li className="mb-4 text-black">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleSubMenu("route")}
          >
            {!isCollapsed && (
              <>
                <span className="ml-2">Route</span>
                <span className="ml-auto">
                  {openSubMenu === "route" ? "▼" : "▶"}
                </span>
              </>
            )}
          </div>

          {/* Submenu */}
          {openSubMenu === "route" && !isCollapsed && (
            <ul className="ml-6 mt-2 text-black">
              <li className="my-1">
                <Link to="/route" className="ml-2 text-black no-underline">
                  Route
                </Link>
              </li>
              <li className="my-1">
                <Link to="/point" className="ml-2 text-black no-underline">
                  Point
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Route with Submenu */}
        <li className="mb-4 text-black">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleSubMenu("order")}
          >
            {!isCollapsed && (
              <>
                <span className="ml-2">Order</span>
                <span className="ml-auto">
                  {openSubMenu === "order" ? "▼" : "▶"}
                </span>
              </>
            )}
          </div>

          {/* Submenu */}
          {openSubMenu === "order" && !isCollapsed && (
            <ul className="ml-6 mt-2 text-black">
              <li className="my-1">
                <Link to="/route" className="ml-2 text-black no-underline">
                  Food
                </Link>
              </li>
              <li className="my-1">
                <Link to="/point" className="ml-2 text-black no-underline">
                  Mart
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="flex items-center mb-4 text-black">
          {!isCollapsed && (
            <Link to="/operators" className="ml-2 text-black no-underline">
              Operator Point
            </Link>
          )}
        </li>

        {/* Add more menu items similarly... */}
      </ul>
    </div>
  );
};

export default Sidebar;
