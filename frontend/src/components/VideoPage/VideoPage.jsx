import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import './VideoPage.css';
import Comment from "../Comment/Comment";

const VideoPage = (props) => {
    const { video} = useParams();

    let navigate = useNavigate();
  const buttonClick = () => {
    let path = '/searchpage';
    navigate(path);
  }
    

    return ( 
    <div>
        <button onClick={buttonClick} className='button'>Back to Search</button>
       <VideoPlayer video = {video} />
       <RelatedVideos video = {video}/>
       <CommentForm video = {video}/>
       <CommentList video = {video}/>
       <Comment video = {video}/>
       
    </div>
    );

}
 
export default VideoPage;