import axios from "axios";
import { useEffect, useState } from "react";


const RelatedVideos = (props) => {

    const [relatedvideos, setRelatedVideos] = useState([]);
    
    

    const fetchRelatedVideos = async (videoId = 'M7lc1UVf-VE') => {
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
    }, [])





    return ( 
        <div>
            <h1>Related Videos</h1>
            {relatedvideos.map((video,index) => {
                return(
                    
                    <div key={index}> {video.snippet ? <img src={video.snippet.thumbnails.default.url}></img> : null}
                    </div>
                    
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;