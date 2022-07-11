import React from "react";
import "./General.scss";
import "./Hour.scss";

interface SectionTitleProps {
    readonly sec_title: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className="section_title">
            {props.sec_title}
        </div>
    );
  };