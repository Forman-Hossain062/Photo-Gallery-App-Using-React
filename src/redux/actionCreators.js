import * as actionTypes from './actionTypes';
import axios from 'axios';


export const addComment = (dishId, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        comment: comment,
    }
    newComment.date = new Date().toISOString();
    axios.post("http://localhost:3002/comments/", newComment)
        .then(res => res.data)
        .then(comment => dispatch(commentConcat(comment)))
}

export const commentConcat = comment => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment,
    }
}
export const commentsLoading = () => {
    return {
        type: actionTypes.COMMENTS_LOADING,
    }
}
export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}
export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}
export const fetchComments = () => dispatch => {
    dispatch(commentsLoading())
    axios.get("http://localhost:3002/comments/")
        .then(res => res.data)
        .then(com => dispatch(loadComments(com)))

}

export const dishesLoading = () => {
    return {
        type: actionTypes.DISHES_LOADING
    }
}
export const disheFailed = errMsg => {
    return {
        type: actionTypes.DISHES_FAILED,
        payload: errMsg
    }
}

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());
    axios.get("http://localhost:3002/dishes/")
        // axios.get("gs://photo-gallery1-6d1d0.appspot.com/db.json/dishes/")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        .catch(error => dispatch(disheFailed(error.message)))

}