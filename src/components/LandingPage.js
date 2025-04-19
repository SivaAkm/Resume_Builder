import '../index.css';

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white shadow-xl rounded-2xl max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Instant Resume Builder
        </h1>
        <p className="text-gray-600 mb-6">
          Create a professional resume in just a few clicks.
        </p>
        <button
          onClick={() => navigate("/PersonalDetails")}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
        >
         Let's Get Started
        </button>
      </div>
    </div>
  );
}
