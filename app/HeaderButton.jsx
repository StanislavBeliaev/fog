import React from "react";

export const HeaderButton = ({children, className, onClick}) =>{
    return(
        <button onClick={onClick} className={className}>{children}</button>
    )
}