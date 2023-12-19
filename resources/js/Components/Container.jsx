import clsx from "clsx";
import React from "react";

export default function Container(props) {
    const { children, className = "" } = props;
    return <div className={clsx(className)}>{children}</div>;
}
