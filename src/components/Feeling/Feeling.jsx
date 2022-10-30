import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Feeling() {
  let dispatch = useDispatch();
  let history = useHistory();

  const [feeling, setFeeling] = useState(0);

  const feelingHandle = (evt) => {
    evt.preventDefault();

    dispatch({
      type: "SET_FEELING",
      payload: feeling,
    });
    history.push("/understanding");
  };

  return (
    <>
      <h2>How are you feeling today</h2>
      <label htmlFor="feelingInput">Feeling?</label>
      <br />
      <input
        type="number"
        required
        placeholder="From 1 to 5"
        onChange={(evt) => {
          setFeeling(evt.target.value);
        }}
        value={feeling}
      />
      <button onClick={feelingHandle}>NEXT</button>
    </>
  );
}

export default Feeling;
