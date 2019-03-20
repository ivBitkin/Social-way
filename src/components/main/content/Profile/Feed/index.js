import React, { Fragment } from 'react';
import classes             from './index.module.css';

const Feed = (props) => {
		let message = props.message.map((el, id) => {
				return (<div key={id}>{el.message}</div>);
		});
		return (
				<Fragment>
						<h1 className={classes.Title}>Feed</h1>
						<div>
								<div>
										<input/>
										<button>Add Post</button>
								</div>
								{message}
						</div>
				</Fragment>
		);
};

export default Feed;