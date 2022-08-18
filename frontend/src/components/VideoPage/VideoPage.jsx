import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
    const { video} = useParams();
    

    return ( 
    <div>
       <VideoPlayer video = {video} />
       <RelatedVideos video = {video}/>
       <CommentList video = {video}/>
       <CommentForm video = {video}/>
       
    </div>
    );

}
 
export default VideoPage;