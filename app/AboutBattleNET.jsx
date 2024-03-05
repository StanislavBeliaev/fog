'use client'
import React from "react";
import classes from "./AboutBattleNET.module.css"
import { YoutubeEmbed } from "./YoutubeEmbed.";

export const AboutBattleNET = ({ section2Ref: AboutBattleNETRef }) => {
    const spanStyle = {
        fontFamily: 'MontserratBold',
        fontSize: '24px',
        color: '#dedede',
        paddingLeft: '25px',
    }
    const embedId = 'z6oMZUsZ648'
    return (
        <div ref={AboutBattleNETRef} className={classes.AboutBattleNETContainer}>
            <div className={classes.Grid}>
                <div className={classes.titleBattleNET}>
                    <p className={classes.titleBattleNETText}>Що таке топ1 battle.net</p>
                </div>
                <div className={classes.AboutBattleNETTextContainer}>
                    <p className={classes.AboutBattleNETText}><span style={spanStyle}>Blizzard Battle.net — </span> інтернет-орієнтована платформа цифрового поширення відеоігор
                        і служба соціальних мереж, розроблена компанією Blizzard Entertainment. Запуск платформи відбувся 31 грудня 1996 року, а вже 3 січня 1997</p>
                </div>
                <div className={classes.TwitchPlayer}>
                    <div className={classes.YoutubePlayer}>
                        <YoutubeEmbed embedId={embedId} />
                    </div>
                </div>
            </div>
        </div>
    )
}
