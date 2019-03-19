import React,{Fragment} from 'react';
import Post from '../Posts';

 const  Dialogs = () => {
  return(
    <Fragment>
      <div>
     <h1>Dialogs1</h1>
     <Post message={"Some Text Some Text 1"} />
        <Post message={"Some Text Some Text 2"} />
        <Post message={"Some Text Some Text 3"} />
        <Post message={"Some Text Some Text 4"} />
        <Post message={"Some Text Some Text 5"} />
        <Post message={"Some Text Some Text 6"} />
        <Post message={"Some Text Some Text 7"} />
        <Post message={"Some Text Some Text 8"} />
        </div>
    </Fragment>
  )
}

export default Dialogs;