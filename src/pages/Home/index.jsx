import React, { useState } from "react";
import { fetchUserDetails } from "@/api/profile";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const toggleDropdown = async () => {
    if (!user) {
      try {
        const userData = await fetchUserDetails();
        setUser(userData);
      } catch (error) {
        setError("Failed to fetch user details.");
      }
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="relative">
          <img
            src={user.profile}
            alt="Avatar"
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              {user ? (
                <div className="px-4 py-2 text-sm">
                  <strong>{user.full_name}</strong>
                  <p className="text-gray-500">{user.email}</p>
                </div>
              ) : (
                <div className="px-4 py-2 text-sm text-red-500">
                  {error || "Loading..."}
                </div>
              )}
              {user && (
                <>
                  <hr className="my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-2xl">Welcome to the Home Page!</h2>
      </main>
    </div>
  );
};

export default Home;
