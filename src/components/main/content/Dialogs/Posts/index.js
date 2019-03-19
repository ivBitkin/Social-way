import React,{Fragment} from 'react';
import classes from "./index.module.css";
 const  Post = (props) => {
  return(
    <Fragment>
      <div  className={classes.post}>
        {props.message}
      </div>
    </Fragment>
  )
}

export default Post;