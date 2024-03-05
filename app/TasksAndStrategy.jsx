import React from "react";
import classes from './TasksAndStrategy.module.css'

export const TasksAndStrategy = ({section4Ref}) =>{
    return(
        <div ref={section4Ref} className={classes.TasksAndStrategyContainer}>
            <div className={classes.Grid}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.titleText}>ЗАВДАННЯ СТРАТЕГІЇ</h1>
                </div>
                <div className={classes.TableContainer}>
                    
                </div>
            </div>
        </div>
    )
}