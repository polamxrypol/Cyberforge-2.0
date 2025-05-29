import React from 'react';
import { HomeIcon, Hash, Settings, Shield, Bot, Database, BookOpen, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const sidebarItems = [
    { icon: <HomeIcon size={20} />, label: 'Home', path: '/' },
    { icon: <Hash size={20} />, label: 'Channels', path: '/channels' },
    { icon: <Bot size={20} />, label: 'Bots', path: '/bots' },
    { icon: <Database size={20} />, label: 'AI Models', path: '/models' },
    { icon: <Shield size={20} />, label: 'Cyber Tools', path: '/cyber-tools' },
    { icon: <BookOpen size={20} />, label: 'Learn', path: '/learn' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div 
      className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      } flex flex-col fixed left-0 top-0 z-50`}
    >
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        {!collapsed && (
          <div className="text-cyan-400 font-bold text-xl">CyberForge</div>
        )}
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-800 transition-colors"
        >
          {collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          )}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md hover:bg-gray-800 transition-colors ${
                  collapsed ? 'justify-center' : 'space-x-3'
                }`}
              >
                <span className="text-gray-300">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <Link
          to="/logout"
          className={`flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors ${
            collapsed ? 'justify-center' : 'space-x-3'
          }`}
        >
          <LogOut size={20} className="text-gray-300" />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;