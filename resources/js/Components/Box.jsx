import clsx from "clsx";
import React from "react";

export default function Box(props) {
    const { children, className = "" } = props;
    return (
        <div className={clsx(className, "bg-white rounded-sm shadow-sm p-5")}>
            {children}
        </div>
    );
}
