import { useState } from "react";
import classes from "./TaskThree.module.css";

const TaskThree = () => {
  const [text, setText] = useState("");

  const textHandle = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h4>Data Binding Exercise</h4>
      <div>
        <label htmlFor="text">
          <input onChange={textHandle}></input>
        </label>
      </div>

      <p>{text}</p>
    </>
  );
};

export default TaskThree;
