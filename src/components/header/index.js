import React,{Fragment} from 'react';
import classes from "./index.module.css";
 const  Header = (props) => {
  return(
    <Fragment>
      <header  className={classes.Header}>
      <div>Hello {props.name}</div>
      </header>
    </Fragment>
  )
}

export default Header;

