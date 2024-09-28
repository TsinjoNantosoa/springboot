import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);

    // const {id}=useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/users/${id}`)
        loadUser();
    }

    return (
        <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-700">User List</h1>
            <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                        <tr>
                            <th
                                scope="col"
                                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base"
                            >
                                #
                            </th>
                            <th
                                scope="col"
                                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base"
                            >
                                Last Name
                            </th>
                            <th
                                scope="col"
                                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base"
                            >
                                Username
                            </th>
                            <th
                                scope="col"
                                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left font-semibold uppercase tracking-wider text-xs sm:text-sm md:text-base"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                                    <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-b border-gray-200 text-gray-700 text-xs sm:text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-b border-gray-200 text-gray-700 text-xs sm:text-sm">
                                        {user.name}
                                    </td>
                                    <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-b border-gray-200 text-gray-700 text-xs sm:text-sm">
                                        {user.username}
                                    </td>
                                    <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-b border-gray-200 text-gray-700 text-xs sm:text-sm">
                                        {user.email}
                                    </td>
                                    <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 border-b border-gray-200 text-gray-700 text-xs sm:text-sm">
    
                                            <Link className="mr-2 px-3 py-1 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
                                            to={`/viewuser/${user.id}`}>
                                                View
                                            </Link>
                                            
                                            <Link className="mr-2 px-3 py-1 bg-green-500 text-white font-semibold rounded shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-150 ease-in-out" 
                                            to={`/edituser/${user.id}`}
                                            >
                                                Edit
                                            </Link>
                                            
                                            <button className="px-3 py-1 bg-red-500 text-white font-semibold rounded shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-150 ease-in-out"
                                            onClick={()=> deleteUser(user.id)}
                                            >
                                                Delete
                                            </button>
                                    </td>

                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
