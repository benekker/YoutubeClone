import RelatedVideos from "../RelatedVideos/RelatedVideos";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
    

    return ( 
    <div>
       <VideoPlayer />
       <RelatedVideos/>
    </div>
    );

}
 
export default VideoPage;