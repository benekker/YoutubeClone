
import axios from 'axios'
import { useEffect, useState, } from 'react';
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

    return (
        <div>
            <SearchBar fetchVideos = {fetchVideos} />
            {videos.map((video, index) => {
                return(
                    <div key = {index}>{video.snippet ? <img src={video.snippet.thumbnails.default.url}></img> : null} </div>
                )
            })};
            
        
        </div>
        



    );
}
 
export default SearchPage;
