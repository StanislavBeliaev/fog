import React from "react"
import classes from "./header.module.css"
import { TwitterSVG, FaceBookSVG, PinterestSVG, InstargamSVG } from "./SocialMediaSVG/SocialMediaSVG"
import { HeaderButton } from "./HeaderButton"



export const Header = () => {
    return (
        <div className={classes.HeaderTopContainer}>
            <div className={classes.HeaderGridTop}>
                <div className={classes.HeaderTextContainer}>
                    <p className={classes.HeaderText}>Слава Україні!</p>
                </div>
                <div className={classes.FoggySVG}>
                    <img className={classes.HeaderSVG} src='/imgHeader/foggy_logo.svg' alt="" />
                </div>
                <div className={classes.SVGIconsContainer}>
                    <div className={classes.SVGIcons}>
                        <TwitterSVG />
                    </div>
                    <div className={classes.SVGIcons}>

                        <FaceBookSVG />
                    </div>
                    <div className={classes.SVGIcons}>
                        <PinterestSVG />
                    </div>
                    <div className={classes.SVGIcons}>
                        <InstargamSVG />
                    </div>
                </div>
            </div>
            <div className={classes.HeaderBottomContainer}>
                <div className={classes.HeaderGridBottom}>

                    <HeaderButton className={classes.Button}><p>ПРО ГРАВЦЯ</p></HeaderButton>

                    <HeaderButton className={classes.Button}><p>ЩО ТАКЕ TOP1 BATTLE.NET</p></HeaderButton>

                    <HeaderButton className={classes.Button}><p>ЗАВДАННЯ-СТРАТЕГІЇ</p></HeaderButton>

                    <HeaderButton className={classes.Button}><p>ЗАМОВИТИ ЗАВДАННЯ</p></HeaderButton>
                </div>
            </div>
        </div>
    )
}
