import React, {Fragment} from 'react';
import Post from './Posts';
import classes from './index.module.css';
import {Users} from './Users/Users';
import {sendMessageCreator, updateNewTextMessageCreator} from "../../../../redux/state";

const Dialogs = (props) => {
    console.log(props)
    let state = props.store.getState().dialogsPage;
    let {userDataState, messagesDataState} = props;
    let newMessageText = props.store._state.dialogsPage.newMessageText;
    let usersElements = userDataState.map((user, id) => {
        return (<Users key={id} name={user.name} id={user.id}/>);
    });

    let dialogsElements = messagesDataState.map((dialog, id) => {
        return (<Post key={id} message={dialog.message}/>);
    });


    let newPostElement = React.createRef();


    let addSendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageText = (e) => {
       newMessageText = e.target.value;
       props.store.dispatch(updateNewTextMessageCreator(newMessageText))
    }

    return (
        <Fragment>
            <div className={classes.gridDialogs}>
                <div className={classes.users}>
                    <h1>Users</h1>
                    {usersElements}
                </div>
                <div className={classes.dialogs}>
                    <h1>Chat</h1>
                    {dialogsElements}
                    <div className={classes.EnterMessage}>
                        <input value={newMessageText} onChange={onNewMessageText}  className={classes.input}/>
                        <button className={classes.Enterbtn} onClick={addSendMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Dialogs;