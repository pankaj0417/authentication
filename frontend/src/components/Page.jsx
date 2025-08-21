import React from "react";
import {useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // clear user data
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-10 text-center w-96">
        <h1 className="text-3xl font-bold text-white">
          Welcome 🎉
        </h1>
        <p className=" text-white mt-4">
          You have successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Page;
