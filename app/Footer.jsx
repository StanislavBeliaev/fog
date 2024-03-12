import React from "react";
import classes from './footer.module.css'
export const Footer = () => {
    const spanStyle = {
        color: '#ffca33',
        textDecoration: 'underline',
    }
    const currentYear = new Date().getFullYear()
    return (
        <div className={classes.FooterContainer}>
            <div className={classes.Grid}>
                <div className={classes.FooterLogo}>
                    <img src="/imgHeader/foggy_logo-copy.png" alt="" />
                    <p className={classes.FooterText}>© foggy.com, {currentYear} <span className={classes.FooterTextSmall}>Всі ці товарні знаки є власністю відповідних</span></p>
                </div>
            </div>
        </div>
    )
}