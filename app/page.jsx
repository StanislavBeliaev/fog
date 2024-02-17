import { AboutBattleNET } from "./AboutBattleNET";
import { AboutPlayer } from "./AboutPlayer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionLine } from "./SectionLine";
import { TaskForStream } from "./TaskForStream";
import { TasksAndStrategy } from "./TasksAndStrategy";
import classes from "./page.module.css"

export default function Home() {
  const style = {
    height: '16px'
  }
  return (
    <main className={classes.MainContainer}>
      <div className={classes.HeaderComponent}>
        <Header />
      </div>
      <div className={classes.TaskForStreamComponent}>
        <TaskForStream />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <AboutPlayer />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <AboutBattleNET />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <TasksAndStrategy />
      </div>
      <div style={style}>
        <SectionLine />
      </div>
      <div>
        <Footer/>
      </div>
    </main>
  );
}
