const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {message: 'Some Text Some Text Ivan'},
        {message: 'Some Text Some Text Bogdan'},
        {message: 'Some Text Some Text Ivan'},
        {message: 'Some Text Some Text Artur'},
        {message: 'Some Text Some Text Vlad'},
        {message: 'Some Text Some Text Diana'},
        {message: 'Some Text Some Text Anime'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 25,
                message: state.newPostText
            };
            state.posts.push(newpost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }


}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    };
};
export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    };
};

export default profileReducer;