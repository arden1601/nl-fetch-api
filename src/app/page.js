"use client";
import axios from "axios";
import toast from "react-hot-toast";

export default function Home() {

  const handleClick = () => {
    const clickFunction = axios.get("/api/dummy")
    toast.promise(clickFunction, {
      loading: "Loading...",
      success: (data) => {
        return data.data.message
      },
      error: (error) => {
        return error.response.data.message
      }
    })

  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button className="cursor-pointer" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
