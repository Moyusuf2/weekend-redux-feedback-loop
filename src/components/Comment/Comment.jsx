import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Comment() {
  let [comment, setComment] = useState(0);
  let dispatch = useDispatch();
  let history = useHistory();

  const commentHandle = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "SET_COMMENT",
      payload: comment,
    });
    history.push("/review");
  };

  return (
    <>
      <h2>Any comment</h2>
      <label htmlFor="commentInput">Comment?</label>
      <br />
      <input
        type="text"
        placeholder="Comment here"
        onChange={(evt) => {
          setComment(evt.target.value);
        }}
        value={comment}
      />
      <button onClick={commentHandle}>NEXT</button>
    </>
  );
}

export default Comment;
