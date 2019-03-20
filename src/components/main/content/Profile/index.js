import React,{Fragment} from 'react';
import classes          from "./index.module.css";
import Feed             from './Feed';
import ProfileInfo      from './ProfileInfo';
 const  Profile = () => {
  return(
    <Fragment>
        <div>
        <ProfileInfo />
        <Feed/>
        </div>
    </Fragment>
  )
}

export default Profile;