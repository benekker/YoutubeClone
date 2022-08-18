import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {

    const [user, token] = useAuth();
    const [text, setText] = useState('');

    const createComment = async (event) => {
        event.preventDefault();
        let newComment ={
            "user": user.id,
            "video_id": props.video,
            "text": text,
            "likes": 0,
            "dislikes": 0
        }
        
        let response = await axios.post('http://127.0.0.1:8000/api/comments/',
        newComment, 
        {
            headers: {
                Authorization: "Bearer " + token,
              },
        });
        console.log(newComment)
        
    }
    return ( 
        <form onSubmit = {createComment}>
            <div>
                <input
                type='text'
                value={text} 
                onChange={(event) => setText(event.target.value)}/>
                
            </div>
            <div><button type="submit">Comment</button></div>
        </form>
     );
}
 
export default CommentForm;