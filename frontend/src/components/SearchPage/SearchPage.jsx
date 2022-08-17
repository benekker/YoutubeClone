
import axios from 'axios'
import { useEffect, useState, } from 'react';
import { Route, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const SearchPage = (props) => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([])
    
    const fetchVideos = async (videoTitle = 'starwars') => {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoTitle}&key=AIzaSyBoMrh9V0ZVSk-HsdkLK9rkybZ4TQCcL5w&part=snippet`
            );
            setVideos(response.data.items);
            console.log(response.data)
            

        } catch (error){
            console.log(error.message);
        }
        };

    useEffect(() => {    
        fetchVideos();
    }, [token]);

    const getVideo = (videoId) => {
        
    }


    

    return (
        <div>
            <SearchBar fetchVideos = {fetchVideos} />
            {videos.map((video, index) => {
                return(
                <Link to={`/videopage/${video.id.videoId}`}>
                    <div key = {index}>{video.snippet ?  <img src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null}    
                    </div>
                </Link>
                )
            })};
            
        
        </div>
        



    );
}
 
export default SearchPage;
