import '../styles/SearchBar.scss';
import {ChangeEventHandler} from "react";
import debounce from '../services/debounce';

interface searchBarProps {
    search: (searchText:string) => void;
}

function SearchBar({search}: searchBarProps) {

    
    const handleSearchInput: ChangeEventHandler<HTMLInputElement>  = (e) => {
        if(typeof e.target.value === 'string') {
            search(e.target.value);
        }
    };
    const handleSearchInputDebounced = debounce(handleSearchInput, 250);

    return (
        <div className="searchBar">
            <input type="text" placeholder="search for text" onChange={handleSearchInputDebounced}/>
        </div>
    );
}

export default SearchBar;
