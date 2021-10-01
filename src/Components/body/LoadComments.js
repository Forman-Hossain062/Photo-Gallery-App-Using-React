import React from 'react'
import dateFormat from 'dateformat';
import Spinner from './Spinner/Spinner'

const LoadComments = props => {
    if (props.commentsIsLoading) {
        <Spinner />
    }
    else {
        return (

            props.comments.map(comment => {
                return (
                    <div style={{ padding: '15px' }}>
                        <h5>{comment.author}</h5>
                        <p> Comment: {comment.comment}</p>
                        {/* <p>Rating: {comment.rating}</p> */}
                        <p>Date: {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")} </p>

                    </div >
                )
            })
        )
    }


}

export default LoadComments;
