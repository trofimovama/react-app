import React from "react";
import "./General.scss";
import "./Header.scss";
import SearchBar from "./SearchBar";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";

const Header:React.FC = observer (() => {


    return (
      <>      
        <div className="header_title">
          {Store.day}, {Store.month} {Store.date}
        </div>
        <SearchBar />
      </>

    );
  });
  
  export default Header;
  