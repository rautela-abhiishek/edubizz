import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">Edubrizz</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-200">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
              <Users className="h-5 w-5" />
              <span>Teachers</span>
            </Link>
            <Link
              to="/add"
              className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
            >
              Add Teacher
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-1 hover:text-indigo-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;