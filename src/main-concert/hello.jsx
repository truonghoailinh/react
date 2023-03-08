import React, { useState } from "react";

function HelloWork() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setDate(new Date().toLocaleTimeString())
  }, 1000)
  return (
    <div>
      <h1>
        Hello Work
      </h1>
      <h2>It is {date}.</h2>
    </div>
  );
}
export default HelloWork;