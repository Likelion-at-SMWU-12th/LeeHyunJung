import React, { useEffect } from "react";

const PickSpiderman = ({ spidermanID, state, setState }) => {
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
