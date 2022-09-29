import React from "react";

const Qa = (props) => {
  const { id, question, answer } = props.qa;
  return (
    <div>
      <h1 className="text-xl font-semibold mt-10 mb-5">
        {id}. {question}
      </h1>
      <p>{answer}</p>
    </div>
  );
};

export default Qa;
