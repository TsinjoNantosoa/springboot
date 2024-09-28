import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewsUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, [id]); 

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Details of the User</h2>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800 mb-4 text-center">Details of User ID: {id}</p>
          <ul className="space-y-4 text-center">
            <li className="flex flex-col items-center">
              <b className="text-gray-700">Name:</b>
              <span>{user.name}</span>
            </li>
            <li className="flex flex-col items-center">
              <b className="text-gray-700">Username:</b>
              <span>{user.username}</span>
            </li>
            <li className="flex flex-col items-center">
              <b className="text-gray-700">Email:</b>
              <span>{user.email}</span>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
