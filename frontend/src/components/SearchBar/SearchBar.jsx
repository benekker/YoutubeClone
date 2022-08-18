import { useState } from "react";
import './SearchBar.css'


const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function handleSearch (event){
        event.preventDefault();
        props.fetchVideos(search)
    }
    return ( 
    <div>
        <form onSubmit={handleSearch}>
            
            <input className ='search-bar' type="text" placeholder="search..."  value={search} onChange={(event) => setSearch(event.target.value)}/>
            <button className='search-button' type="submit">Search</button>
        </form>
        

        </div>
     );
}
 
export default SearchBar;
