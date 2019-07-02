import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const card = {
    margin: '10px',
    padding: '10px'
}

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            redirectTo: null
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassword2Change = this.handlePassword2Change.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handlePassword2Change(e) {
        this.setState({
            password2: e.target.value
        });
    }

    handleRegister(e) {

        if (this.state.password === this.state.password2) {
            axios.post('/user/', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                if (res.data) {
                    console.log('you have are signed up');
                    this.setState({ //redirect to login page
                        redirectTo: '/login'
                    })
                } else {
                    console.log('we had an error');
                }
            }).catch(err => {
                console.log('register server error: ');
                console.log(err);
            });
        } else {
            console.log('passwords do not match');
        }

        e.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: '',
            password2: ''
        });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <title>Register</title>
                    <div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <div className="card card-body" style={card}>
                                <h1 className="text-center mb-3"> Register</h1>
                                <form action="/users/register" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Enter Name" value={this.state.name} onChange={this.handleNameChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" placeholder="Create Password" value={this.state.password} onChange={this.handlePasswordChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <input type="password" id="password2" name="password2" className="form-control" placeholder="Confirm Password" value={this.state.password2} onChange={this.handlePassword2Change} />
                                    </div>
                                    <button className="btn btn-primary btn-block black" onClick={this.handleRegister}>Register</button>
                                </form>
                                <p className="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>

                </div >
            );
        }
    }
};
export default Register;