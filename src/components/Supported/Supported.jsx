import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Support() {
  let [support, setSupport] = useState(0);
  let dispatch = useDispatch();
  let history = useHistory();

  const supportHandle = (evt) => {
    evt.preventDefault();

    dispatch({
      type: "SET_SUPPORT",
      payload: support,
    });
    history.push("/comment");
  };

  return (
    <>
      <h2>How well are you being supported? </h2>
      <label htmlFor="supportInput">Support?</label>
      <br />
      <input
        type="number"
        required
        placeholder="From 1 to 5"
        onChange={(evt) => {
          setSupport(evt.target.value);
        }}
        value={support}
      />
      <button onClick={supportHandle}>NEXT</button>
    </>
  );
}

export default Support;
