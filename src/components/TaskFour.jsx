import { useState } from "react";
import classes from "./TaskFour.module.css";
import Child from "./Child";
const TaskFour = () => {
  const [value, setValue] = useState("I need to be updated from my child");

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className={classes.wrapper}>
        <div>Parent</div>
        <div className={classes["box-wrapper"]}>{value}</div>
      </div>

      <div className="wrapper">
        <Child data={setValue} />
      </div>
    </>
  );
};
export default TaskFour;
