import React from 'react';
// import { Menu, Settings, User } from 'lucide-react';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 shadow-md">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          {/* <Menu /> */}
        </button>
        <h6 className="text-xl font-bold">Page Heading</h6>
      </div>
      <div className="flex items-center space-x-4">
        {/* <Settings /> */}
        {/* <User /> */}
      </div>
    </div>
  );
};

export default TopBar;
