import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {

    render() {
        return (
            <div>
                <br />
                <h3 className="err">{this.props.location.state}</h3>
                <br />
                <Link className="cancelbtn" to='/'>Go Home</Link>
            </div>
        )
    }
}

export default Error;