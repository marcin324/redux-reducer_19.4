'use strict';

import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


// Dodawanie komentarza
const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};


// Usuwanie komentarza
const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
};


// Edytowanie komentarza
const editComment = (text, commentId) => {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: commentId
    }
};


// Ocena +1
const thumbUpComment = (commentId, votes)=> {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId,
        votes: votes + 1
    }
};


// Ocena -1
const thumbDownComment = (commentId, votes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId,
        votes: votes - 1
    }
};


export {addComment, removeComment, editComment, thumbUpComment, thumbDownComment }