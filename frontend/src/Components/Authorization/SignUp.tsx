import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome <span className="text-green-500">Hunters</span>
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Create an account or sign up with your social media
      </p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-4"
      />

      <div className="w-full max-w-md text-right mb-4">
        <a href="#" className="text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </div>

      <button
        className="w-full max-w-md bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition mb-4"
        onClick={() => alert("Signed up successfully")}
      >
        Sign Up
      </button>

      <p className="text-center text-gray-600 mb-4">Or</p>
      <button
        className="w-full max-w-md text-center text-blue-600 hover:underline"
        onClick={() => alert("Sign up with Google")}
      >
        Sign Up with Google
      </button>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <a
          onClick={() => navigate("/login")}
          className="text-green-600 hover:underline cursor-pointer"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default SignUp;
