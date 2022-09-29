import React, { useEffect, useState } from "react";
import Activity from "../Activitycard/Activity";
import Break from "../Break/Break";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";

const Activities = () => {
  //data load
  const [items, setItems] = useState([]);
  //exercise time state
  const [time, setTime] = useState([]);
  //break time state
  const [exTime, setExTime] = useState("0");
  //active button
  const [toggleState, setToggleState] = useState(0);
  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  //break time set
  useEffect(() => {
    const breakT = localStorage.getItem("breakTime");
    let storedT = 0;
    if (breakT) {
      storedT = JSON.parse(breakT);
      setExTime(storedT);
    }
    setExTime(storedT);
  }, [items]);
  //break buttons bg color
  useEffect(() => {
    const breakTab = localStorage.getItem("breakTab");
    let storedTab = 0;
    if (breakTab) {
      storedTab = JSON.parse(breakTab);
      setToggleState(storedTab);
    }
    setToggleState(storedTab);
  }, []);
  const addTime = (timeAm) => {
    setTime([...time, timeAm]);
  };
  //Break calculation
  const updateBreak = (t, index) => {
    setToggleState(index);
    setExTime(t);
    localStorage.setItem("breakTime", JSON.stringify(t));
    localStorage.setItem("breakTab", JSON.stringify(index));
  };
  const finished = () => {
    setTime([]);
    setExTime("0");
    setToggleState(0);
    localStorage.setItem("breakTime", JSON.stringify("0"));
    localStorage.setItem("breakTab", JSON.stringify(0));
  };
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-8">
      <div className="2xl:col-span-6 xl:col-span-4 lg:col-span-2 sm:px-6 xl:px-20 p-5 md:py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center sm:text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 inline-block md:mr-3 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          Power Club
        </h2>
        <h3 className="my-3 md:my-6 text-lg md:text-xl text-center sm:text-left capitalize">
          Select Today's activity
        </h3>
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-5 items-stretch">
          {items.map((item) => (
            <Activity key={item.id} item={item} addTime={addTime}></Activity>
          ))}
        </div>
      </div>
      <div className="2xl:col-span-2 xl:col-span-2 lg:col-span-1 py-14 px-4 xl:px-8 bg-blue-50">
        <div className="h-auto sticky top-16 bg-white p-4 xl:p-5 rounded-lg sm:w-[500px] lg:w-full mx-auto w-full">
          <Profile></Profile>
          <Break updateBreak={updateBreak} toggleState={toggleState}></Break>
          <Exercise time={time} exTime={exTime} finished={finished}></Exercise>
        </div>
      </div>
    </div>
  );
};

export default Activities;
