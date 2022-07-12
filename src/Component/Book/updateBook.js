import React, { Component } from 'react';
import Header from '../Header/Header';
import '../../static/style.css'

export default class UpdateBook extends Component {
    render() {
        return (
            <div className="app">
                <div className="login-form">
                    <div className="title">Sign In</div>
                    <div className="form">
                        <form>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="uname" required />
                              
                            </div>
                            <div className="input-container">
                                <label>Email </label>
                                <input type="text" name="email" required />
                               
                            </div>
                            <div className="input-container">
                                <label>Address </label>
                                <input type="text" name="address" required />
                               
                            </div>
                            <div className="input-container">
                                <label>Phone </label>
                                <input type="text" name="phone" required />
                              
                            </div>
                            <div className="input-container">
                                <label>PassWord </label>
                                <input type="password" name="password" required />
                              
                            </div>
                 
                            <div className="button-container">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
