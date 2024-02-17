'use client'
import React from "react";
import classes from './taskForStream.module.css';
import { TaskButton } from "./TaskButton";

export const TaskForStream = () => {
    const top1 = 'ТОП 1';
    const yellowTextStyle = {
        color: 'yellow',
        fontFamily: 'MontserratBold',
        fontSize: '54px',
    };
    const textStyle = {
        ...yellowTextStyle,
        color: '#ffffff',
        paddingLeft: '150px',
        paddingRight: '90px',
        paddingTop: '35px',

    };
    const centerSpan = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const bttleNET = {
        marginLeft: '15px'
    }
    const redirectToDonation = () => {
        window.open('https://donatello.to/foggywc3', '_blank');
    }
    return (
        <div className={classes.TaskForStreamContainer}>
            <div className={classes.TaskForStreamLogoContainer}>
                <img src="/imgHeader/W3logo.png" alt="WC3_Logo" />
            </div>
            <div className={classes.TaskForStreamText}>
                <p style={textStyle}>ДОПОМОЖИ СТРІМЕРУ СТАТИ <span style={centerSpan}><span style={yellowTextStyle}>{top1}</span> <span style={bttleNET}>BATTLE.NET</span></span></p>
            </div>
            <div className={classes.TaskForStreamButtonContainer}>
                <TaskButton className={classes.TaskButton} onClick={redirectToDonation}>
                    <p className={classes.TextTaskButton}>ЗАМОВИТИ ЗАВДАННЯ НА СТРІМ</p>
                </TaskButton>
            </div>
        </div>
    )
}