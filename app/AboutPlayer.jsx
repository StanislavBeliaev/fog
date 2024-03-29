import React from "react";
import classes from './aboutPlayer.module.css'
import { TelegramSVG2 } from "./SocialMediaSVG/SocialMediaSVG";
export const AboutPlayer = ({ section3Ref: AboutPlayerRef }) => {
    const imgStyle = {
        position: 'absolute',
        marginLeft: '760px',
        marginTop: '-492px',
        height: '1349px',
        paddingTop: '216px',
        width: '662px'
    }
    const imgTw = {
        width: '106px',
        height: '124px',
        marginLeft: '40px',
        marginBottom: '5px'
    }
    const imgYt = {
        width: '159px',
        height: '112px',
        marginLeft: '60px',
        marginBottom: '13px'
    }
    const imgTG = {
        width: '128px',
        height: '127px',
        marginLeft: '60px',
        marginBottom: '5px'
    }
    const DonateLinksStyle = {
        paddingTop: '10px',
        fontSize: '20px',
    }
    const DonateRef = {
        color: '#54504e',
        fontSize: '20px',
        paddingTop: '10px',
    }
    const donateLinks = [
        { label: "HelpUkraine1, ", link: "https://liquipedia.net/warcraft/Help_Ukraine/1" },
        { label: "HelpUkraine2, ", link: "https://liquipedia.net/warcraft/Help_Ukraine/2" },
        { label: "HelpUkraine3, ", link: "https://liquipedia.net/warcraft/Help_Ukraine_League" },
        { label: "StandWithUkraine, ", link: "https://liquipedia.net/warcraft/Ukrainian_WC3/Season_1" },
        { label: "StandWithUkraine2, ", link: "https://stand-with-ukraine-h3.com.ua/season2" },
        { label: "StandWithUkraine3, ", link: "https://stand-with-ukraine-h3.com.ua/season3" },
        { label: "StandWithUkraine4, ", link: "https://stand-with-ukraine-h3.com.ua/season4" },
        { label: "StandWithUkraine5, ", link: "https://season-5.stand-with-ukraine-h3.com.ua/" }
    ];

    return (
        <div ref={AboutPlayerRef} className={classes.AboutPlayerContainer}>
            <div className={classes.Grid}>
                <div className={classes.HeadingTextContainer}>
                    <h1 className={classes.Heading}>ПРО ГРАВЦЯ</h1>
                </div>
                <p className={classes.PlayerName}>АНДРІЙ КОРЕНЬ</p>
                <div className={classes.UlContainer}>
                    <ul className={classes.PlayerFacts}>
                        <li style={DonateLinksStyle}>Один з найсильніших гравців світу у грі Warcraft III </li>
                        <li style={DonateLinksStyle}>Родом з міста Львів</li>
                        <li style={DonateLinksStyle}>Граю у форматі: виконання завдань від глядачів</li>
                        <li style={DonateLinksStyle}>Проводжу трансляції на Twitch.TV та YouTube</li>
                    </ul>
                </div>
                <img style={imgStyle} src="/imgHeader/foggy-pic.webp" alt="" />
                <div className={classes.StreamLinkTextContainer}>
                    <p className={classes.StreamLinkText}>СТРІМ, ЗАПИСИ, АНОНСИ </p>
                </div>
                <div className={classes.StreamLinks}>
                    <a href="https://www.twitch.tv/foggywc3" target="_blank">
                        <img style={imgTw} src="/imgHeader/tw.svg" alt="" />
                    </a>
                    <a href="https://www.youtube.com/foggywc3" target="_blank">
                        <img style={imgYt} src="/imgHeader/yt.svg" alt="" />
                    </a>
                    <a href="https://t.me/+XIxzoTY3jvNjNzcy" target="_blank">
                        <TelegramSVG2 style={imgTG} />
                    </a>
                </div>
                <div className={classes.HelpUkraineTextContainer}>
                    <p className={classes.HelpUkraineText}>Організатор та учасник серії матчів на підтримку України</p>
                </div>
                <div className={classes.HelpUkraineLinksContainer}>
                    <p className={classes.HelpUkraineLinks}>
                        {donateLinks.map((item, index) => (
                            <a key={index} className={classes.DonateLinksStyle} href={item.link} target="_blank">{item.label}</a>
                        ))}
                    </p>
                </div>
                <div className={classes.SubscribeContainer}>
                    <div>
                        <p className={classes.SubscribeText}>Якщо вам сподобались мої стріми та виникло бажання підтримати канал:</p>
                    </div>
                    <div className={classes.DonateLinks}>
                        <a style={DonateLinksStyle} href="http://">Платна підписка - Twitch Sub</a>
                        <a style={DonateLinksStyle} href="https://donatello.to/foggywc3">Donatello</a>
                        <p style={DonateRef}>PayPal: andrijkorenj@gmail.com</p>
                        <p style={{ ...DonateRef, paddingBottom: '70px' }}>Binance Pay ID: 449074052</p>
                    </div>
                </div>
            </div>

        </div>
    )
}