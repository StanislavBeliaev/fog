import React from "react"
import classes from "./header.module.css"
import { TwitterSVG, FaceBookSVG, PinterestSVG, InstargamSVG, DiscordSVG, TelegramSVG } from "./SocialMediaSVG/SocialMediaSVG"
import { HeaderButton } from "./HeaderButton"



export const Header = ({ section1Ref, section2Ref, section3Ref, section4Ref: TaskAndStrategyRef, scrollToSection }) => {
    const redirectToDonation = () => {
        window.open('https://donatello.to/foggywc3', '_blank');
    }
    return (
        <div ref={section1Ref} className={classes.HeaderTopContainer}>
            <div className={classes.HeaderGridTop}>
                <div className={classes.HeaderTextContainer}>
                    <p className={classes.HeaderText}>Слава Україні!</p>
                </div>
                <div className={classes.FoggySVG}>
                    <img className={classes.HeaderSVG} src='/imgHeader/foggy_logo.svg' alt="" />
                </div>
                <div className={classes.SVGIconsContainer}>
                    <div className={classes.SVGIcons}>
                        <a href="https://twitter.com/foggywc3" target="_blank">
                            <TwitterSVG />
                        </a>
                    </div>
                    <div className={classes.SVGIcons}>
                        <a href="https://www.facebook.com/foggywc3" target="_blank">
                            <FaceBookSVG />
                        </a>
                    </div>
                    <div className={classes.SVGIcons}>
                        <a href="https://t.me/+XIxzoTY3jvNjNzcy" target="_blank">
                            <TelegramSVG />
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.HeaderBottomContainer}>
                <div className={classes.HeaderGridBottom}>

                    <HeaderButton onClick={() => scrollToSection(section3Ref)} className={classes.Button}><p>ПРО ГРАВЦЯ</p></HeaderButton>

                    <HeaderButton onClick={() => scrollToSection(section2Ref)} className={classes.Button}><p>ЩО ТАКЕ TOP1 BATTLE.NET</p></HeaderButton>

                    <HeaderButton onClick={() => scrollToSection(TaskAndStrategyRef)} className={classes.Button}><p>ЗАВДАННЯ-СТРАТЕГІЇ</p></HeaderButton>

                    {<HeaderButton /* onClick={() => scrollToSection(section3Ref)}*/ className={classes.Button}><p>ЗАМОВИТИ ЗАВДАННЯ</p></HeaderButton>}
                </div>
            </div>
        </div>
    )
}
