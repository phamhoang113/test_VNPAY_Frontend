import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './Component/Book/BookList';
import ManagerBook from './Component/Book/ManagerBook';
import LogIn from './Component/login/Login';
import SignUp from './Component/login/Signup';
import UpdateBook from './Component/Book/updateBook';
import AddBook from './Component/Book/addBook';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' exact={true} component={Home}/>
            <Route path='/book_list' exact={true} component={BookList}/>
            <Route path='/manager_book' exact={true} component={ManagerBook}/>
            <Route path='/login' exact={true} component={LogIn}/>
            <Route path='/signup' exact={true} component={SignUp}/>
            <Route path='/addbook' exact={true} component={AddBook}/>
            <Route path='/updatebook' exact={true} component={UpdateBook}/>
          </Switch>
        </Router>
    )
  }
}

export default App;