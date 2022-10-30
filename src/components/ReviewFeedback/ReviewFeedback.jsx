import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from 'sweetalert2';
function ReviewFeedBack() {
  let history = useHistory();
  let dispatch = useDispatch();
  // let reviewFeedback = useSelector((store) =>{
  //     return store.reviewFeedback
  // })

  const feeling = useSelector((store) => {
    return store.feelings;
  });

  const understanding = useSelector((store) => {
    return store.understanding;
  });

  const supported = useSelector((store) => {
    return store.support;
  });

  const comments = useSelector((store) => {
    return store.comment;
  });

  const newReviewFeedback = {
    feeling,
    understanding,
    supported,
    comments,
  };

  dispatch({
    type: "SET_REVIEW_FEEDBACK",
    payload: newReviewFeedback,
  });

  const handleSubmit = () => {
    console.log("In HandleSubmit");
    // alert("Thank you for the feedback.Back to home page");

    axios({
      method: "POST",
      url: "/feedback",
      data: newReviewFeedback,
    })
      .then((res) => {
        console.log("feedback sent to server", res);
      })
      .catch((error) => {
        console.log("error sending feedback", error);
      });
      swal.fire({
        title:'Thank you for your feedback. Would you like to return to homepage? ',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Cancel`,
      })

    history.push("/");
  };

  const handleNewSubmission = () => {
    // alert("Back to home page to fill out new feedback");

    swal.fire({
      title:'Submit a new feedback',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    })
    history.push("/");
  };

  return (
    <>
      <h2>Review Feedback</h2>
      <ul>
        <li>Feeling: {newReviewFeedback.feeling}</li>
        <br />
        <li>Understanding: {newReviewFeedback.understanding}</li>
        <br />
        <li>Support: {newReviewFeedback.supported}</li>
        <br />
        <li>Comment: {newReviewFeedback.comments}</li>
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      <h5>OR</h5>
      <br />
      <button onClick={handleNewSubmission}>Fill out new feedback</button>
    </>
  );
}

export default ReviewFeedBack;
