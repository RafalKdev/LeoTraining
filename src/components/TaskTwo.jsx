import { useState } from "react";

const TaskTwo = () => {
  const [show, isShow] = useState(true);

  const handleButton = () => {
    isShow(!show);
  };

  return (
    <>
      {show && <p>Toggle Challenge</p>}
      <button onClick={handleButton}>Click</button>
    </>
  );
};

export default TaskTwo;
