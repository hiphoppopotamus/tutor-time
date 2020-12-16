import React, { Component } from 'react';
import '../css/Login.css';

class Login extends Component {
    state = {
        email: null,
        password: null
    }

    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password,
        })
    }

    render() {
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="text" id="email" value={this.state.email} />
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Password" type="text" id="password" value={this.state.password} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;

