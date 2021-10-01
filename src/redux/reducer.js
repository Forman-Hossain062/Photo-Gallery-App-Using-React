
import * as actionTypes from './actionTypes'
import { combineReducers } from 'redux'

const dishReducer = (dishState = {
    isLoading: false,
    dishes: [],
    errMsg: null,
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null,
},
    action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: [],
                errMsg: null,
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload,
                errMsg: null,
            }
        case actionTypes.DISHES_FAILED:
            // console.log(action.payload);
            return {
                ...dishState,
                isLoading: false,
                dishes: [],
                errMsg: action.payload,
            }
        //authenticatio
        case actionTypes.AUTH_SUCCESS:
            return {
                ...dishState,
                token: action.payload.token,
                userId: action.payload.userId,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...dishState,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...dishState,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...dishState,
                authFailedMsg: action.payload
            }
        default:
            return dishState;
    }
}

const commentReducer = (commentState = { isLoading: true, comments: [], }, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }

        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
})


