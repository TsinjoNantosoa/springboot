import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <button className="text-white font-bold text-xl" onClick={() => alert('Thank you for choosing the spring boot')}>
          Application Spring Boot
        </button>

        
        <div className="flex items-center space-x-4">
         
          <Link
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => alert('Would you like to go back home?')}
            to={"/"}
          >
            Home
          </Link>

         
          <Link
            className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => alert('Woul you like to add a new user?')} to="addUser">Add User</Link>
        </div>
      </div>
    </nav>
  );
}
