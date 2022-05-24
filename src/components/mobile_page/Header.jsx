import React from "react";
import "./General.scss";
import "./Header.scss";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
      <>      
        <div className="header_title">
          Sunday, May 20
        </div>
        <SearchBar />
      </>

    );
  };
  
  export default Header;
  