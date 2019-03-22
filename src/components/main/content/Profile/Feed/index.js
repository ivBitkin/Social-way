import React, { Fragment }                                      from 'react';
import classes                                                  from './index.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../../redux/state';



const Feed = (props) => {

		let message = props.profilePage.posts.map((el, id) => {

				return (<div key={id}>{el.message}</div>);
		});

		let newPostElement = React.createRef();

		let addPost = () => {
				props.dispatch(addPostActionCreator());
		};

		let onPostChange = () => {
				let text   = newPostElement.current.value;
				let action = updateNewPostTextActionCreator(text);
				props.dispatch(action);
		};
		return (
				<Fragment>
						<h1 className={classes.Title}>Feed</h1>
						<div>
								<div>
										<input onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
										<button onClick={addPost}>Add Post</button>
								</div>
								{message}
						</div>
				</Fragment>
		);
};

export default Feed;