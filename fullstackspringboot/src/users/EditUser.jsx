import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();
    const { id } = useParams();
  
    const [user, setUser] = useState({
      name: '',
      username: '',
      email: '',
    });
  
    const { name, username, email } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    // Ajout de la fonction loadUser directement dans useEffect pour éviter le warning
    useEffect(() => {
      const loadUser = async () => {
        try {
          const result = await axios.get(`http://localhost:8080/users/${id}`);
          setUser(result.data);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
      loadUser();
    }, [id]); // Ajout de 'id' comme dépendance
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:8080/users/${id}`, user);
        navigate('/');
      } catch (error) {
        console.error('Error updating user:', error);
      }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Edit User</h2>
        <form  onSubmit={(e) =>onSubmit(e)}>  
       
          {/* Champ Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name please"
              value={name}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          {/* Champ Username */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your username please"
              value={username}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          {/* Champ Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          {/* Boutons d'action */}
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
            >
              Submit
            </button>
            <Link
              type="button"
              className="px-6 py-2 bg-gray-500 text-white font-semibold rounded shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
              to="/"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
