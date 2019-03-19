import React,{Fragment} from 'react';
import classes from "./index.module.css";
import SideBar from './sideBar';
import Content from './content';
 const  Main = () => {
  return(
    <Fragment>
      <main  className={classes.main}>
       {/* <Content /> */}
      </main>
    </Fragment>
  )
}

export default Main;