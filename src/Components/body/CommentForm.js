import React, { Component } from 'react'
import { Form, Button, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    // console.log(state);
    return {
        token: state.dishes.token,
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: '',
            comment: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleSubmit = (e) => {
        this.props.addComment(this.props.dishId, this.state.author, this.state.comment)
        this.setState({
            author: '',
            comment: '',
        })

        e.preventDefault();
    }
    render() {
        let form = null;
        if (this.props.token === null) {
            form = <Alert color='danger'>You have to login to leave a feedback!</Alert>
        }
        else {
            form = (
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name='author'
                        value={this.state.author}
                        placeholder="Your Name :"
                        onChange={this.handleInputChange} required />
                    <br />
                    <Input
                        type='textarea'
                        name='comment'
                        value={this.state.comment}
                        placeholder="Your Comment :"
                        onChange={this.handleInputChange}
                        required />
                    <br />
                    <Button type='submit'>Submit Comment</Button>
                </Form>
            )
        }
        return (
            <div>
                {form}
            </div>
        )
    }
}
export default connect(mapStateToProps)(CommentForm);