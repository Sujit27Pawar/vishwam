import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./components/shared/Sidebar";
import TopBar from "./components/shared/Topbar";
import ContentBar from "./components/shared/ContentBar";
import Dashboard from "./components/dashboard/dashboard";
import User from "./components/user/user";
import { Home } from "./components/dashboard/dashboard";
import { About } from "./components/dashboard/dashboard";


const AppRoutes = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex flex-col flex-1">
          <TopBar toggleSidebar={toggleSidebar} />
          <div className="flex-1 bg-gray-100 overflow-auto">
            <Routes>
              <Route path="/" element={<ContentBar />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="user" element={<User />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppRoutes;
