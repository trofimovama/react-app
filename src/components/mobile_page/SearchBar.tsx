import "./General.scss";
import "./SearchBar.scss";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";


const SearchBar = observer (() => {

  return (
    <form className="input-container">
        <input 
          type="text"
          className="search-bar" 
          value={Store.city}
          onChange={Store.getValue}
          onKeyPress = {Store.search} />
    </form>
  )
});

export default SearchBar;