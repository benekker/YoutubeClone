
import axios from 'axios'
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const SearchPage = () => {

    const [user, token] = useAuth();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
        try{
            let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=devCodeCamp&key=AIzaSyBoMrh9V0ZVSk-HsdkLK9rkybZ4TQCcL5w&part=snippet'
            );
            setVideos(response.data);
            console.log(response.data)
        } catch (error){
            console.log(error.message);
        }
        };
        fetchVideos();
    }, [token]);

    return ( 
        // <div>
        <h1>SearchPage for {user.username}</h1>    
        /* {videos &&
            videos.map((video, index) => 
            <li key={index}> Title{video.snippet.title}</li>
            )
        </div>
        ) */
    )
}
 
export default SearchPage;
