'use client'
import React from "react";
import classes from './taskForStream.module.css';
import { TaskButton } from "./TaskButton";

export const TaskForStream = ({ section2Ref }) => {
    const top1 = 'ТОП 1';

    const redirectToDonation = () => {
        window.open('https://donatello.to/foggywc3', '_blank');
    }
    return (
        <div ref={section2Ref} className={classes.TaskForStreamContainer}>
            <div className={classes.TaskForStreamLogoContainer}>
                <img src="/imgHeader/W3logo.png" alt="WC3_Logo" />
            </div>
            <div className={classes.TaskForStreamFoggyElfContainer}>

            </div>
            <div className={classes.TaskForStreamText}>
                <p className={classes.textStyle}>ДОПОМОЖИ СТРІМЕРУ СТАТИ <span className={classes.centerSpan}><span className={classes.yellowTextStyle}>{top1}</span> <span className={classes.battleNET}>BATTLE.NET</span></span></p>
            </div>
            
            <div className={classes.TaskForStreamButtonContainer}>
                <TaskButton className={classes.TaskButton} onClick={redirectToDonation}>
                    <p className={classes.TextTaskButton}>ЗАМОВИТИ ЗАВДАННЯ НА СТРІМ</p>
                </TaskButton>
            </div>
        </div>
    )
}