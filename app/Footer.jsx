import React from "react";
import classes from './footer.module.css'
export const Footer = () => {
    const spanStyle = {
        color: '#ffca33',
        textDecoration: 'underline',
    }

return (
    <div className={classes.FooterContainer}>
        <div className={classes.Grid}>
            <div className={classes.FooterLogo}>
                <img src="/imgHeader/foggy_logo-copy.png" alt="" />
                <p className={classes.FooterText}>© foggy.com, 2024 <br />Всі ці товарні знаки є власністю відповідних</p>
            </div>
            <div>
                <p className={classes.FooterText}>Розробка: <span style={spanStyle}>rapid-snail</span></p>
            </div>
        </div>
    </div>
)
}