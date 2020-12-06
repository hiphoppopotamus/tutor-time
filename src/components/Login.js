import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="text" id="email" />
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="text" id="password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;

