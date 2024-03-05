import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'; // Changed icon
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const placeholderImage = 'https://via.placeholder.com/150'; // Replace with your actual image URL

const FacultySidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? 'w-60' : 'w-20'} h-screen fixed bg-CDF0EA text-019673 flex flex-col font-roboto rounded-20 transition-width ease-in-out duration-500 shadow-md overflow-hidden`}>
      <div className="sidebar__header p-5 border-b-2 border-019673 flex items-center">
        <MenuIcon
          className={`sidebar__hamburger ${expanded ? 'text-019673 mt-1': 'text-019673'}`}
          style={{ fontSize: '35px', marginBottom: expanded ? '170px' : '0' }} // Adjust margin-bottom here
          onClick={toggleSidebar}
        />
        {expanded && (
          <div className="sidebar__avatar-container" style={{ marginTop: '20px' }}>
            <img className="sidebar__avatar w-32 h-32 rounded-full bg-gray-700 mr-4" src={placeholderImage} alt="Avatar" />
            <div style={{ marginTop: '10px', marginLeft: '8px' }}>Kurt Macasling</div> {/* Adjust margin-left here */}
          </div>
        )}
      </div>
      <div className="sidebar__content flex-grow p-5 relative"> {/* Added 'relative' class */}
        {expanded && (
          <>
            <button className="sidebar__button flex items-center justify-center bg-transparent border-none text-019673 py-2 px-3 cursor-pointer text-lg hover:bg-gray-300 hover:text-white ml-2" style={{ width: '170px', paddingRight: '16px' }}>
              <SettingsAccessibilityIcon className="mr-2" /> {/* Changed icon */}
              Manage Faculty
            </button>
            <button className="sidebar__button flex items-center justify-center bg-transparent border-none text-019673 py-2 px-3 cursor-pointer text-lg hover:bg-gray-300 hover:text-white ml-2" style={{ width: '170px' }}>
              <ManageAccountsIcon className="mr-2" />
              Manage Account
            </button>
          </>
        )}
        {expanded && (
          <div className="sidebar__signout absolute bottom-0 left-10 right-10 mb-4 text-center"> {/* Adjusted position */}
            <button className="sidebar__button flex items-center justify-center bg-transparent border-none text-019673 py-3 px-4 cursor-pointer text-lg hover:bg-gray-300 hover:text-white" style={{ width: '150px' }}>
              <LogoutIcon className="mr-2" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultySidebar;
