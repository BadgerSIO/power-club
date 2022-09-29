import React from "react";

const Activity = (props) => {
  const { item, addTime } = props;
  const { name, des, imgsrc, time } = item;
  return (
    <div className="bg-white pb-20 rounded-lg border border-gray-200  group relative">
      <div className="image overflow-hidden rounded-t-lg p-5 bg-white z w-full">
        <img
          src={imgsrc}
          alt=""
          className="w-full lg:group-hover:scale-110 ease-linear duration-300"
        />
      </div>
      <div className="activity-info p-5 bg-white">
        <h1 className="text-lg md:text-xl font-bold capitalize">
          Activity: {name}
        </h1>
        <p className="text-sm md:text-base pt-3 pb-2">
          <strong>About Activity:</strong> {des}
        </p>
        <h4>
          <strong>Time Required:</strong> {time} min
        </h4>
      </div>
      <div className="  w-11/12 mx-auto rounded-md  absolute bottom-5 left-1/2 -translate-x-1/2 ">
        <button
          onClick={() => addTime(time)}
          className=" bg-blue-600 hover:bg-green-600  focus:bg-green-600 focus:ring focus:outline-none focus:ring-offset-2 ring-green-500 focus:ring-opacity-80 px-5 py-3 rounded-lg text-white w-full flex items-center justify-center group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:inline-block mr-1 hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-semibold">Add Activity</p>
        </button>
      </div>
    </div>
  );
};

export default Activity;
