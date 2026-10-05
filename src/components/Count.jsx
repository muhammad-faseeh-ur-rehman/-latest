import { useState } from "react";

const Count = () => {
  const [cal, setCal] = useState(0);

  return (
    <div>
      <h1>{cal}</h1>

      <button
        style={{ backgroundColor: "black" }}
        onClick={() => setCal(cal + 1)}
      >
        Count
      </button>
    </div>
  );
};

export default Count;
