'use client'
import React from "react";
import classes from "./AboutBattleNET.module.css"
import { YoutubeEmbed } from "./YoutubeEmbed";

export const AboutBattleNET = ({ section2Ref: AboutBattleNETRef }) => {
    const spanStyle = {
        fontFamily: 'MontserratBold',
        fontSize: '24px',
        color: '#dedede',
    }
    const embedId = 'z6oMZUsZ648'
    return (
        <div ref={AboutBattleNETRef} className={classes.AboutBattleNETContainer}>
            <div className={classes.Grid}>
                <div className={classes.titleBattleNET}>
                    <p className={classes.titleBattleNETText}>Що таке топ1 battle.net</p>
                </div>
                <div className={classes.AboutBattleNETTextContainer}>
                    <p className={classes.AboutBattleNETText}><span style={spanStyle}>TOP 1 Battle Net — </span> це найголовніше завдання-челендж: досягнути та стати №1 серед найкращих
                        гравців серверу, разом з глядачами, які паралельно замовляють свої улюблені стратегії та героїв.</p>
                    <div className={classes.Padding}></div>
                    <p className={classes.AboutBattleNETText}>Завдання можуть бути: легкі, середні, складані та надзвичайно важливі.</p>
                    <div className={classes.Padding}></div>
                    <p className={classes.AboutBattleNETText}>Додатково ви можете замовити пригоду чи шоу-матчі між найсильнішими гравцями серверу.</p>
                    <div className={classes.Padding}></div>
                    <p className={classes.AboutBattleNETText}>Найцікавіші ігри будуть записані та опубліковані на YouTube-каналі.</p>
                    <div className={classes.Padding}></div>
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
