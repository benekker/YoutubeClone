import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './CommentList.css'

const CommentList = (props) => {

    const [comments, setComments] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => {
        const fetchComments = async () => {
          try {
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.video}`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setComments(response.data);
          } catch (error) {
            console.log(error.response.data);
          }
        };
        fetchComments();
      }, [props.video]);

    return ( 
        <div>
        {comments.map((comment,index) => {
            return(
              <div className="comment-border">
                <div key={index}> Name: {user.username}</div> 
                <div> Text: {comment.text} </div>
                <div>Likes:{comment.likes} </div>
                <div> Dislikes:{comment.dislikes}</div>
              </div>  
                
            )
        })}
        </div>
     );
}
 
export default CommentList;