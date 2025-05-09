"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const handleClick = () => {
    // axios
    //   .get("/api/dummy", {
    //     params:{
    //       id: 2,
    //     }
    //   })
    //   .then((response) => {
    //     setData(response.data.message);
    //     window.alert(response.data.message);
    //   })
    //   .catch((error) => {
    //     window.alert(error.response.data.message);
    //   });

    const clickFunction = axios.get("/api/dummy", {
      params: {
        id: 3,
      }
    })
    toast.promise(clickFunction, {
      loading: "Loading...",
      success: (data) => {
        return data.data.message
      },
      error: (error) => {
        return error.response.data.message
      }
    })
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <button
        className="cursor-pointer text-black border-2 p-4"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}
