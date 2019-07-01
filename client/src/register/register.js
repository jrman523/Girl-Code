import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

const card = {
   margin: '10px',
   padding: '10px'
}

const Register = () => {
    return (
        <div>
            <title>Register</title>
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body" style={card}>
                        <h1 className="text-center mb-3"> Register</h1>
                        <form action="/users/register" method="POST">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input
                                    type="email"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                            </div>
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
                                    placeholder="Create Password"
                                />
                            </div>
                            <div className="form-group">
                                <label for="password2">Confirm Password</label>
                                <input
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block black">Register</button>
                        </form>
                        <p className="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Register;