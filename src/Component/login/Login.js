import React, { Component } from 'react';
import Header from '../Header/Header';
import '../../static/style.css'
import axios from 'axios';

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errorMessage: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.target.value });
    }
    handleChange1(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        try {
          let res = await fetch("127.0.0.1:8080/api/auth/sign_in", {
            method: "POST",
            body: JSON.stringify({
              name: this.state.username,
              password: this.state.password
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            console.log("success");
          } else {
            console.log("fail")
          }
        } catch (err) {
          console.log(err);
        }
    }

    render() {
        return (
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    <div className="form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" value={this.state.username} onChange={this.handleChange} name="uname" required />

                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" value={this.state.password} onChange={this.handleChange1} name="pass" required />

                            </div>
                            <div className="button-container">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
