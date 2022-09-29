import React from "react";

const Break = (props) => {
  const { updateBreak, toggleState } = props;
  return (
    <div className="my-10">
      <h1 className="text-xl font-bold capitalize">Add a break</h1>
      <div className="weight justify-items-center grid grid-cols-4 gap-3  bg-gray-100 p-4  rounded-xl mt-3 text-center">
        <button
          onClick={() => updateBreak(10, 1)}
          className={
            toggleState === 1
              ? "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-600 hover:text-white "
              : "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white"
          }
        >
          10m
        </button>
        <button
          onClick={() => updateBreak(20, 2)}
          className={
            toggleState === 2
              ? "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-600 hover:text-white "
              : "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white"
          }
        >
          20m
        </button>
        <button
          onClick={() => updateBreak(30, 3)}
          className={
            toggleState === 3
              ? "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-600 hover:text-white "
              : "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white"
          }
        >
          30m
        </button>
        <button
          onClick={() => updateBreak(40, 4)}
          className={
            toggleState === 4
              ? "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-600 hover:text-white "
              : "px-2 py-3 2xl:px-3 2xl:py-4 mx-2 font-semibold rounded-full bg-white hover:bg-blue-600 hover:text-white"
          }
        >
          40m
        </button>
      </div>
    </div>
  );
};

export default Break;
