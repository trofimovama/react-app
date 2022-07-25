import React from "react";
import "./General.scss";
import "./Hour.scss";

interface SectionTitleProps {
    sec_title: string;
}

export const SectionTitle = React.memo((props: SectionTitleProps) => {
    return (
        <div className="section_title">
            {props.sec_title}
        </div>
    );
  });
  