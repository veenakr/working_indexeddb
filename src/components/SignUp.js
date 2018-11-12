import React from 'react';
// import { history } from '../helpers/history';
import Modal from './Modal';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleGoHome = this.handleGoHome.bind(this);
        this.hidemodal = this.hidemodal.bind(this);
        this.showmodal = this.showmodal.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showmodal() {
        this.setState({ show: true })
    }

    hidemodal() {
        this.setState({ show: false });
        this.props.history.push('/');
            window.location.reload();
    }

    handleSignUp(e) {
        e.preventDefault();
        const user = this.state;

        if(user.password !== user.confirmPassword){
            this.setState({ error: "Passwords donot match" });
        }
        
        else {
            
            
        if(!window.indexedDB) {
            console.log("Not supported");
        }

        let request = window.indexedDB.open("LoginPage", 1),
            db,
            tx,
            store,
            index;

        request.onupgradeneeded = function(e) {
            db = request.result;
            store = db.createObjectStore('UserDataStore', { keyPath: 'id', autoIncrement: true});
            index = store.createIndex("firstName", "firstName", { unique: false });
        }

        request.onerror = function(e) {
            console.log("There was an error: "+ e.target.errorCode);
        }

        request.onsuccess = function(e) {
            let db = request.result;
            tx = db.transaction("UserDataStore", "readwrite");
            store = tx.objectStore("UserDataStore");
            index = store.index("firstName");

        
            db.onerror = function(e) {
                console.log("Error: "+e.target.errorCode);
            }

            store.put(user);

            let q1 = store.getAll();

            q1.onsuccess = function(e) {
                // console.log(q1.result);
            }

            tx.oncomplete = function() {
                db.close()       
            }
        }

        this.showmodal();

        
    }
    }

    handleGoHome (e) {
        this.props.history.push('/');
    }

    handleCancel (e) {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: "",
            answer: ""
        });
        let form = document.getElementById("login-page");
        form.reset();
    }

    render() {
        return (
            <div className="main">
                    <h2>Sign Up</h2>
                    <br />
                    <button className="home" onClick={this.handleGoHome}>Home</button>
                    <form id="login-page" onSubmit={this.handleSignUp}>
                        <label><b>First Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Firstname" name="firstName" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Last Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Lastname" name="lastName" onChange={this.handleChange} />
                        <br />

                        <br />
                        <label><b>Gender</b></label><br /><br />
                        <input className="form-item" type="radio" name="gender" value="male" /> Male<br />
                        <input className="form-item" type="radio" name="gender" value="female" /> Female<br />
                        <input className="form-item" type="radio" name="gender" value="other"/> Other<br />

                        <br />
                        <label><b>Email Id</b></label><br />
                        <input className="form-item" type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                        <br />

                        <br />
                        <label><b>Select secret question</b></label><br />
                        <select>
                            <option name="que1">Which was your birth place</option>
                            <option name="que2">When did you start working</option>
                            <option name="que3">Which is your favorite icecream</option>
                        </select><br />
                        <input className="form-item" type="text" placeholder="Enter your answer" name="answer"/> <br /><br />


                        <label><b>Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Confirm Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="confirmPassword" onChange={this.handleChange} required/>
                        <br />
                        <p className="err">{this.state.error}</p>
                        <button className="loginButton" type="submit" name="submit">SignUp</button>
                        <button className="cancelbtn" onClick={this.handleCancel}>clear</button>

                        <Modal show={this.state.show} handleClose={this.hidemodal}>
                            <h3 className="success">User Successfully created</h3>
                            <p>Email: {this.state.email}</p>
                            <p>Firstname: {this.state.firstName}</p>
                            <p>Lastname: {this.state.lastName}</p>
                        </Modal>
                    </form>
            </div>
        )
    }
}





export default SignUp;