import React from "react";
import { Outlet } from "react-router-dom";

const ContentBar = () => {
  return (
    <div className="p-4">
      {/* This will load the routed component */}
      <Outlet />
    </div>
  );
};

export default ContentBar;
