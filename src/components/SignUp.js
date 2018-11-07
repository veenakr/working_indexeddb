import React from 'react';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUp(e) {
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword) {
            this.props.history.push('/');
        }
        else {
            this.setState ({
                error: "Passwords donnot match"
            })
        }
    }

    handleCancel (e) {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: ""
        });
        let form = document.getElementById("login-page");
        form.reset();
    }

    render() {
        return (
            <div className="main">
                    <h2>Sign Up</h2>
                    <form id="login-page" onSubmit={this.handleSignUp}>
                        <label><b>First Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Firstname" name="firstname" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Last Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Lastname" name="lastname" onChange={this.handleChange} />
                        <br />

                        <label><b>Email Id</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Confirm Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="confirmPassword" onChange={this.handleChange} required/>
                        <br />
                        <p className="err">{this.state.error}</p>
                        <button className="loginButton" type="submit" name="submit">SignUp</button>
                        <button className="cancelbtn" onClick={this.handleCancel}>clear</button>
                    </form>
            </div>
        )
    }
}

export default SignUp;