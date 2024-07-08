import { useState, useEffect } from "react";

const PickSpiderman = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Picked!");
  }, [state]);
  return (
    <div>
      <h1> Pick: {state} </h1>
      {
        <button onClick={() => setState(state + 1)}>
          You're my favorite Spiderman⭐
        </button>
      }
    </div>
  );
};

export default PickSpiderman;
