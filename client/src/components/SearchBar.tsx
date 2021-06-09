import {ChangeEventHandler} from "react";

interface searchBarProps {
    search: (searchText:string) => void;
}

function SearchBar({search}: searchBarProps) {
    
    const handleSearchInput: ChangeEventHandler<HTMLInputElement>  = (e) => {
        if(typeof e.target.value === 'string') search(e.target.value);
    };

    return (
        <div className="SearchBar">
            <input type="text" placeholder="search for text" onChange={handleSearchInput}/>
        </div>
    );
}

export default SearchBar;
