import React, { Component } from 'react'
import { Modal, CardText, CardFooter, ModalBody, Card, CardBody, CardImg, ModalFooter, ModalHeader, Button } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';

class DishDetail extends Component {

    render() {
        return (
            <div>
                <Card style={{ textAlign: 'left', textTransform: 'capitalize' }} className=''>

                    <CardImg src={"http://localhost:3002/" + this.props.dish.img} alt={this.props.dish.title} className='ModalImg' />

                    <CardBody>
                        <p style={{ fontWeight: '1.2rem' }}>Name: {this.props.dish.title} </p>
                        <p>Price: {this.props.dish.price} $</p>
                        <CardText> Description: {this.props.dish.desc}</CardText>
                    </CardBody>
                    <hr />
                    <CardText>
                        <LoadComments comments={this.props.comments}
                            commentsIsLoading={this.props.commentsIsLoading} />
                    </CardText>
                    <CommentForm
                        addComment={this.props.addComment}
                        dishId={this.props.dish.id}
                    />
                </Card>

            </div>
        )
    }
}

export default DishDetail;