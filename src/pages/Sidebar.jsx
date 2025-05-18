import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, Users, Briefcase, Settings } from 'react-feather';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen">
     
      <aside
        id="sidebar"
        className={`w-64 bg-white shadow-md p-4 transition-all duration-200 ease-in-out 
        ${showSidebar ? 'block' : 'hidden'} md:block`}
      >
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <button
            className="block md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setShowSidebar(!showSidebar)}
            aria-label="Toggle sidebar"
          >
            <Menu size={22} />
          </button>
        </div>

        <nav className="space-y-6">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700"
          >
            <Home className="mr-2" size={18} /> Dashboard
          </Link>
          <Link
            to="/employees"
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700"
          >
            <Users className="mr-2" size={18} /> Employees
          </Link>
          <Link
            to="/projects"
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700"
          >
            <Briefcase className="mr-2" size={18} /> Projects
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-100 hover:text-blue-700"
          >
            <Settings className="mr-2" size={18} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ">
        
        {!showSidebar && (
          <button
            className="block md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
            onClick={() => setShowSidebar(true)}
            aria-label="Open sidebar"
          >
            <Menu />
          </button>
        )}

       
      </main>
    </div>
  );
};

export default Sidebar;
