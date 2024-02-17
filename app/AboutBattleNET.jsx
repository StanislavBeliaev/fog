import React from "react";
import classes from "./AboutBattleNET.module.css"
export const AboutBattleNET = () => {
    const spanStyle = {
        fontFamily: 'MontserratBold',
        fontSize: '24px',
        color: '#dedede',
        paddingLeft: '25px',
    }
    return (
        <div className={classes.AboutBattleNETContainer}>
            <div className={classes.Grid}>
                <div className={classes.titleBattleNET}>
                    <p className={classes.titleBattleNETText}>Що таке топ1 battle.net</p>
                </div>
                <div className={classes.AboutBattleNETTextContainer}>
                    <p className={classes.AboutBattleNETText}><span style={spanStyle}>Blizzard Battle.net — </span> інтернет-орієнтована платформа цифрового поширення відеоігор
                        і служба соціальних мереж, розроблена компанією Blizzard Entertainment. Запуск платформи відбувся 31 грудня 1996 року, а вже 3 січня 1997</p>
                </div>
                <div className={classes.TwitchPlayer}>
                    <iframe
                        src="https://player.twitch.tv/?channel=foggywc3&parent=localhost.com&muted=true"
                        height="600"
                        width="1000"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen={true}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}