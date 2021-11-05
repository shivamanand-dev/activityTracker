import React, { useState } from "react";
import Task from "./Task";

export default function Tracker() {
  // LocalStorage Array
  const storeArr = [];
  // Text
  const [text, setText] = useState("");
  const setInputText = (e) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    console.log(text, date, month, daysNo);
  };

  //   Date
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;

  let daysNo = new Date(date, month, 0).getDate() - date;

  return (
    <div className="container text-light">
      <h1 className="text-center text-light">
        <u>Activity Tracker</u>
      </h1>

      <div className="mt-3 text-center mb-3">
        <input
          type="text"
          style={{ borderRadius: "5px", border: "none" }}
          className="p-1 mx-3 px-3"
          value={text}
          onChange={setInputText}
        />
        <button
          type="button"
          className="btn btn-primary p-1 px-3"
          onClick={handleAddTask}
          disabled={!text ? true : false}
        >
          Add
        </button>
      </div>

      <Task date={date} month={month} daysNo={daysNo} />
    </div>
  );
}
