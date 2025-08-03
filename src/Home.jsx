import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            Welcome to <span className="text-white"> Dev</span>
            <span className="text-red-600">Tinder 🧑‍💻</span>
          </h1>
          <p className="text-xl mb-10 max-w-xl animate-fade-in delay-100">
            Created By the Developer, for the Developer
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-[#FF3B30] hover:bg-red-600 transition px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-[#0F172A] text-white py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-white">Dev</span>
          <span className="text-red-600">Tinder</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          <div className="border border-gray-600 rounded-lg p-6 text-center bg-[#1E293B] hover:shadow-lg transition">
            <FaUsers className="text-3xl mx-auto mb-4 text-purple-400" />
            <h3 className="font-semibold text-lg mb-2">
              Match with Developers
            </h3>
            <p className="text-gray-300 text-sm">
              Find developers who share your tech stack and interests.
            </p>
          </div>

          <div className="border border-gray-600 rounded-lg p-6 text-center bg-[#1E293B] hover:shadow-lg transition">
            <FaProjectDiagram className="text-3xl mx-auto mb-4 text-pink-400" />
            <h3 className="font-semibold text-lg mb-2">
              Project Collaboration
            </h3>
            <p className="text-gray-300 text-sm">
              Start or join exciting projects that match your skills.
            </p>
          </div>

          <div className="border border-gray-600 rounded-lg p-6 text-center bg-[#1E293B] hover:shadow-lg transition">
            <FaChartLine className="text-3xl mx-auto mb-4 text-yellow-400" />
            <h3 className="font-semibold text-lg mb-2">Skill Growth</h3>
            <p className="text-gray-300 text-sm">
              Learn from peers and enhance your coding abilities.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-600 rounded-lg p-6 text-center bg-[#1E293B] hover:shadow-lg transition">
            <FaHandshake className="text-3xl mx-auto mb-4 text-yellow-300" />
            <h3 className="font-semibold text-lg mb-2">Network Building</h3>
            <p className="text-gray-300 text-sm">
              Build meaningful connections in the tech community.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center pb-10">
          <div>
            <p className="text-3xl font-bold text-indigo-400">5000+</p>
            <p className="text-gray-300 text-sm">Active Developers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-400">1000+</p>
            <p className="text-gray-300 text-sm">Successful Matches</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-indigo-400">50+</p>
            <p className="text-gray-300 text-sm">Projects Launched</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
