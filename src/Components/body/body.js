import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import './Body.css';
import { Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Spinner from '../body/Spinner/Spinner';


const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, author, comment) => dispatch(addComment(dishId, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}
class Body extends Component {
    state = {

        dishSelect: null,
        isModalOpen: false,
    }
    onDishSelect = item => {

        this.setState({
            dishSelect: item,
            isModalOpen: !this.state.isModalOpen,
        })
    }
    goBack = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }
    render() {
        document.title = 'Photo Gallery';
        if (this.props.dishes.isLoading) {
            return <Spinner />
        }
        else if (this.props.dishes.errMsg != null) {
            // console.log(this.props.dishes.authFailedMsg);
            return <Alert color="danger">{this.props.dishes.errMsg}</Alert>
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dishItem={item}
                        key={item.id}
                        onDishSelect={this.onDishSelect} />
                );
            })
            let dishDetail = null;
            if (this.state.dishSelect != null) {
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.dishSelect.id;
                })
                dishDetail = <DishDetail
                    dish={this.state.dishSelect}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading={this.props.comments.isLoading} />
            }
            return (
                <div>
                    <div className='container'>
                        <div className="row">
                            {menu}
                        </div>
                        <div className='row'>
                            <Modal isOpen={this.state.isModalOpen}>
                                <ModalBody>
                                    {dishDetail}
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={this.goBack} color="secondary">Close</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            )
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);