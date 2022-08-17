import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
    const { video} = useParams();
    
    // useEffect(()=>{
    //     debugger
    //     console.log("Video passed in through params: ", video)
    // },[])

    return ( 
    <div>
        {console.log(video)}
       <VideoPlayer video = {video} />
       <RelatedVideos video = {video}/>
       
    </div>
    );

}
 
export default VideoPage;