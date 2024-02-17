import React from "react";

export const HeaderButton = ({children, className}) =>{
    return(
        <button className={className}>{children}</button>
    )
}