import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const card = {
    margin: '10px',
    padding: '10px'
}
const Login = () => {
    return (
        <div>
            <title>Login</title>
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body" style={card}>
                        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                        <form action="/users/login" method="POST">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block black">Login</button>
                        </form>
                        <p className="lead mt-4">
                            No Account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;