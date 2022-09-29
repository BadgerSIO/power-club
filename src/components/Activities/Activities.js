import React, { useEffect, useState } from "react";
import Activity from "../Activitycard/Activity";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Activities = () => {
  const [items, setItems] = useState([]);
  const [time, setTime] = useState([]);
  const [exTime, setExTime] = useState("0");
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  useEffect(() => {
    const breakT = localStorage.getItem("breakTime");
    let storedT = 0;
    if (breakT) {
      storedT = JSON.parse(breakT);
      setExTime(storedT);
    }
    setExTime(storedT);
  }, [items]);
  const addTime = (timeAm) => {
    setTime([...time, timeAm]);
  };
  //Break calculation
  const updateBreak = (t) => {
    setExTime(t);
    localStorage.setItem("breakTime", JSON.stringify(t));
  };
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
        <h3 className=" my-6 text-xl capitalize">Select Today's activity</h3>
        <div className="grid grid-cols-3 gap-5 items-stretch">
          {items.map((item) => (
            <Activity key={item.id} item={item} addTime={addTime}></Activity>
          ))}
        </div>
      </div>
      <div className="col-span-1 py-14 px-8 bg-blue-50">
        <div className="min-h-[80vh] sticky top-16 bg-white p-5 rounded-lg">
          <Profile></Profile>
          <Break updateBreak={updateBreak}></Break>
          <Exercise time={time} exTime={exTime}></Exercise>
        </div>
      </div>
    </div>
  );
};

export default Activities;
