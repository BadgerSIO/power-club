import React from "react";

const Break = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl font-bold capitalize">Add a break</h1>
      <div className="weight justify-items-center bg-gray-100 p-4  rounded-xl mt-3 text-center">
        <button className="px-4 py-5 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white">
          10m
        </button>
        <button className="px-4 py-5 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white">
          20m
        </button>
        <button className="px-4 py-5 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white">
          30m
        </button>
        <button className="px-4 py-5 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white">
          40m
        </button>
      </div>
    </div>
  );
};

export default Break;
