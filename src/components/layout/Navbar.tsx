import React, { useState } from 'react';
import { Menu, Bell, Search, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-900 text-white h-16 flex items-center justify-between px-4 fixed top-0 right-0 left-0 z-40 shadow-md">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-800 transition-colors lg:hidden"
        >
          <Menu size={24} />
        </button>
        <div className="hidden lg:block ml-4 text-xl font-bold text-cyan-400">
          CyberForge
        </div>
      </div>
      
      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
          <span className="text-xs font-bold">JD</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;