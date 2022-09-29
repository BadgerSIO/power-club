import React, { useEffect, useState } from "react";
import Qa from "../Qa/Qa";
const Blog = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("qa.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <div className="sm:px-6 xl:px-20 p-5 md:py-16 lg:w-3/5 sm:mx-auto md:w-3/4 sm:w-[500px]">
      <h1 className="text-2xl mb-10 font-bold capitalize ">Our Blog</h1>
      {questions.map((qa) => (
        <Qa key={qa.id} qa={qa}></Qa>
      ))}
    </div>
  );
};

export default Blog;
