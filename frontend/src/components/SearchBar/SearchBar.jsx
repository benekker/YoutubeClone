import { useState } from "react";
import SearchPage from "../SearchPage/SearchPage";


const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function handleSearch (event){
        event.preventDefault();
        props.fetchVideos(search)
    }
    return ( 
    <div>
        <form onSubmit={handleSearch}>
            <span>Search</span>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
        

        </div>
     );
}
 
export default SearchBar;
