import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { logout } from '../../redux/authActionCreators'

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

class Logout extends Component {
    componentDidMount() {
        // console.log(this.props);
        this.props.logout();
    }
    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(Logout);