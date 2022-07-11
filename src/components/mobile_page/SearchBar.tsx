import React from "react";
import "./General.scss";
import "./SearchBar.scss";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";


const SearchBar:React.FC = observer (() => {

  return (
    <form className="input-container">
        <input 
          type="text"
          className="search-bar" 
          value={Store.city}
          onChange={e => Store.setCity(e.target.value)}
          onKeyPress = {Store.search} />
    </form>
  )
});

export default SearchBar;