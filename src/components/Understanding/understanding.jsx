import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';
function Understanding(){
    let [understand,setUnderstand] = useState(0);
    let dispatch = useDispatch();
    let history = useHistory();


    const understandHandle = (evt) =>{
        evt.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understand
        })
        history.push('/support')
    }


    return(
        <>
        <h2>How well are you understanding content</h2>
        <label htmlFor="understandingInput">Understand?</label>
                <br />
        <input type="number" required placeholder="From 1 to 5" 
        onChange={(evt) =>{setUnderstand(evt.target.value)}}
        value={understand}
        />
        <button onClick={understandHandle}>NEXT</button>
        </>
    )
}

export default Understanding;