import React from "react";

export const TaskButton = ({ className, children, onClick }) => {
    return (
        <button type="button" className={className} onClick={onClick}>{children}</button>
    )
}