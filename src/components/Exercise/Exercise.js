import React from "react";
import { ToastContainer, toast } from "react-toastify";
const Exercise = (props) => {
  const { time, exTime } = props;
  console.log(exTime);
  let totalTime = 0;
  for (let i = 0; i < time.length; i++) {
    totalTime = totalTime + time[i];
  }
  const notify = () =>
    toast.success("Congratulation ! Exercise Completed", {
      position: toast.POSITION.TOP_CENTER,
    });
  return (
    <div>
      <h1 className="font-bold text-xl capitalize">Exercise Details</h1>
      <div className="flex my-4 p-5 font-semibold bg-gray-100">
        <h1 className="flex-1">Exercise time</h1>
        <h2 className="flex-1 text-right">
          <span>{totalTime}</span> min
        </h2>
      </div>
      <div className="flex my-4 p-5 font-semibold bg-gray-100">
        <h1 className="flex-1">Break time</h1>
        <h2 className="flex-1 text-right">{exTime} min</h2>
      </div>
      <button
        onClick={notify}
        className="bg-blue-600 w-full py-3 rounded-lg text-white mt-5 hover:bg-blue-500"
      >
        Activity Completed
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Exercise;
