import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './RelatedVideos.css'

const RelatedVideos = (props) => {

    const [relatedvideos, setRelatedVideos] = useState([]);
    
    

    const fetchRelatedVideos = async () => {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&key=AIzaSyCt_ljbljMKTXXBp8-H6kWyYj7FQRVu0Bk&part=snippet`);
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
            <h2>Related Videos</h2>
            <div className="border-box">
            {relatedvideos.map((video,index) => {
                return(
                    <Link to={`/videopage/${video.id.videoId}`}>
                        <div key={index}> {video.snippet ? <img className = 'image' src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null}
                        </div>
                    </Link>
                )
            })}
            </div>
        </div>
     );
}
 
export default RelatedVideos;