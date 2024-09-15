import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "guest" && password === "guest123") {
      // Navigate to the next screen or show success message
      alert("Login Successful. Welcome back, guest!");
      navigate("/main-app"); // Redirect to the main app
    } else {
      // Show error message
      alert("Login Failed. Incorrect username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome <span className="text-green-500">Hunters</span>
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Log in with your account or with your social media
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
        onClick={handleLogin}
        className="w-full max-w-md bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition mb-4"
      >
        Login
      </button>

      <p className="text-center text-gray-600 mb-4">Or</p>
      <button
        className="w-full max-w-md text-center text-blue-600 hover:underline"
        onClick={() => alert("Google Login")}
      >
        Login with Google
      </button>

      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{" "}
        <a
          onClick={() => navigate("/sign-up")}
          className="text-green-600 hover:underline cursor-pointer"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
