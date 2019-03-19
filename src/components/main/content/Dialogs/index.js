import React, { Fragment } from 'react';
import Post from './Posts';
import classes from './index.module.css';


const Dialogs = () => {
  return (
    <Fragment>

      <div className={classes.gridDialogs}>
        <div className={classes.users}>
          <h1>Users</h1>
          <div>User 1</div>
          <div>User 2</div>
          <div>User 3</div>
          <div>User 4</div>
          <div>User 5</div>
          <div>User 6</div>
          <div>User 7</div>
        </div>
        <div className={classes.dialogs}>
          <h1>Dialogs</h1>
          <Post message={"Some Text Some Text 1"} />
          <Post message={"Some Text Some Text 2"} />
          <Post message={"Some Text Some Text 3"} />
          <Post message={"Some Text Some Text 4"} />
          <Post message={"Some Text Some Text 5"} />
          <Post message={"Some Text Some Text 6"} />
          <Post message={"Some Text Some Text 7"} />
          <Post message={"Some Text Some Text 8"} />
        </div>
      </div>
    </Fragment>
  )
}

export default Dialogs;