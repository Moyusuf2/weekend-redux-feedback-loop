import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
function Comment() {
  let [comment, setComment] = useState(0);
  let dispatch = useDispatch();
  let history = useHistory();


  const feeling = useSelector((store) =>{
    return store.feeling
  })

  const understanding = useSelector((store) =>{
    return store.understanding
  })

  const supported = useSelector ((store) =>{
    return store.support
  })

  const comments = useSelector((store) =>{
    return store.comment
  })

  const reviewFeedback = [
    feeling,
    understanding,
    supported,
    comments
  ];

  const commentHandle = (evt) => {
    evt.preventDefault();



    dispatch({
      type: "SET_COMMENT",
      payload: comment,
    });
    history.push("/");
  };

    dispatch({
      type: 'SET_REVIEW_FEEDBACK',
      payload: reviewFeedback
    })
    history.push('/review')

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
