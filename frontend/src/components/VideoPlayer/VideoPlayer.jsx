const VideoPlayer = (props) => {

    const video = 'M7lc1UVf-VE'
    
    return ( 
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${video}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe> 
        <div> Title: {}</div>
        <div>Description: {}</div>
        </div>
    );
}
 
export default VideoPlayer;