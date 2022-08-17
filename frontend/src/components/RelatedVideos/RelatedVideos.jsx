import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {

    const [relatedvideos, setRelatedVideos] = useState([]);
    
    

    const fetchRelatedVideos = async () => {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&key=AIzaSyBoMrh9V0ZVSk-HsdkLK9rkybZ4TQCcL5w&part=snippet`);
            setRelatedVideos(response.data.items);
            console.log(response.data);
        } catch (error){
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchRelatedVideos();
    }, [props.video])


    const getVideo = (video) => {

    }


    return ( 
        <div>
            <h1>Related Videos</h1>
            {relatedvideos.map((video,index) => {
                return(
                    <Link to={`/videopage/${video.id.videoId}`}>
                        <div key={index}> {video.snippet ? <img src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null}
                        </div>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;