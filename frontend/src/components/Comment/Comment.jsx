import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Comment = (props) => {

    const [user, token] = useAuth();

    const likeComment = async (event) => {
        event.preventDefault();
        let likeTheComment={
                "user": user.id,
                "video_id": props.video,
                "text": "Testing 4"
                
            
        }

        let response = await axios.put('http://127.0.0.1:8000/api/comments/2/like',
        likeTheComment,
        {
            headers: {
                Authorization: "Bearer " + token,
              },
        });

    }
    return ( 
        <div>
            <button onSubmit={likeComment}>Like</button>
        </div>

     );
}
 
export default Comment;