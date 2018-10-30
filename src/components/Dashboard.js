import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions/_actions';

class DashBoard extends React.Component{
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleLogout() {
        this.props.dispatch(userActions.logout());
    }

    render() {
        return(
            <div>
            <h1 className="header">Successfully Logged in!!!</h1>
            <Link onClick={this.handleLogout.bind(this)} className="cancelbtn" to="/">Logout</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(DashBoard);