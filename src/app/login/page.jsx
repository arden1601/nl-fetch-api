"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitFunction = axios.post("/api/auth", {
      username,
      password,
    });
    toast.promise(submitFunction, {
        loading: "Loading...",
        success: (data) => {
            return data.data.message;
        },
        error: (error) => {
            return error.response.data.message;
        },
    })
  };


  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      {username && (
        <div className="absolute top-0 left-0 bg-gray-200 opacity-50 flex justify-center items-center text-white">
          <h1 className="text-2xl font-bold">{username}</h1>
        </div>
      )}
      {password && (
        <div className="absolute top-0 right-0 bg-gray-200 opacity-50 flex justify-center items-center text-white">
          <h1 className="text-2xl font-bold">{password}</h1>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            onChange={handleUsernameChange}
            type="text"
            placeholder="Username"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <input
            onChange={handlePasswordChange}
            type="text"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
