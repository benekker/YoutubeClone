
import axios from 'axios'
import { useEffect, useState, } from 'react';
import useAuth from '../../hooks/useAuth';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './SearchPage.css'


const SearchPage = (props) => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([])
    
    const fetchVideos = async (videoTitle = 'starwars') => {
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoTitle}&key=AIzaSyBoMrh9V0ZVSk-HsdkLK9rkybZ4TQCcL5w&part=snippet&maxResults=20`
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
            <div className='row'>
            {videos.map((video, index) => {
                return(
                <Link to={`/videopage/${video.id.videoId}`}>
                    <div className='column' key = {index}>{video.snippet ?  <img className = 'thumbnail' src={video.snippet.thumbnails.default.url} onClick={ () => getVideo(video)}></img> : null}    
                    </div>
                </Link>
                )
            })}
            </div>
            
        
        </div>
        



    );
}
 
export default SearchPage;
