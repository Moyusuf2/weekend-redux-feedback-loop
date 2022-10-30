import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function ReviewFeedBack(allFeedbacks){

        let history = useHistory();
        let reviewFeedback = useSelector((store) =>{
            return store.reviewFeedback
        })



    return(
        <h2>testing feedback</h2>
    )
}

export default ReviewFeedBack;