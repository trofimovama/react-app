import React from "react";
import "./General.scss";
import "./Hour.scss";

export const SectionTitle = (props) => {
    return (
        <div className="section_title">
            {props.sec_title}
        </div>
    );
  };