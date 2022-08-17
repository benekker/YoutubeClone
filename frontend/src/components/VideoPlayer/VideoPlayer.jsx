import axios from "axios";
import { useEffect, useState } from "react";

const VideoPlayer = (props) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    useEffect(async () =>{
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${props.video}&key=AIzaSyBoMrh9V0ZVSk-HsdkLK9rkybZ4TQCcL5w`);
        setTitle(response.data.items[0].snippet.title)
        console.log(response.data)
        setDescription(response.data.items[0].snippet.description)
        },[props.video]);
     
    return ( 
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.video}?autoplay=1&origin=http://example.com`}
        frameBorder="0"></iframe> 
        <div> Title: {title}</div>
        <div>Description: {description}</div>
        </div>
    );
}
 
export default VideoPlayer;