
import axios from 'axios'
import { useEffect, useState, } from 'react';
import { Route, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SearchBar from '../SearchBar/SearchBar';


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
                <a href='http://localhost:3000/videopage'>
                    <div key = {index}>{video.snippet ? <img src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null} 
                    {/* <Link to={`/videopage/${video}`}></Link> */}
                    
                    </div>
                </a>
                )
            })};
            
        
        </div>
        



    );
}
 
export default SearchPage;
