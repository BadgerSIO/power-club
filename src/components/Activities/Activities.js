import React, { useEffect, useState } from "react";
import Activity from "../Activitycard/Activity";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Activities = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 px-20 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 inline-block mr-3 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          Power Club
        </h2>
        <h3 className=" my-6 text-xl">Select Todays Exercise</h3>
        <div className="grid grid-cols-3 gap-5 items-stretch">
          {items.map((item) => (
            <Activity key={item.id} item={item}></Activity>
          ))}
        </div>
      </div>
      <div className="col-span-1 py-14 px-8 bg-blue-50">
        <div className="h-[80vh]  sticky top-16 bg-white p-5 rounded-lg">
          <Profile></Profile>
          <Break></Break>
          <Exercise></Exercise>
        </div>
      </div>
    </div>
  );
};

export default Activities;
