import React from 'react';
import { Redirect } from 'react-router-dom'
import './style.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const card = {
    margin: '10px',
    padding: '10px'
}
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

   render(){
    if(this.state.redirectTo){
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    }else{
        return (
            <div>
                <title>Login</title>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body" style={card}>
                            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                            <form action="/users/login" method="POST">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <button className="btn btn-primary btn-block black" onClick={this.handleSubmit} >Login</button>
                            </form>
                            <p className="lead mt-4">
                                No Account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   }
};
export default Login;