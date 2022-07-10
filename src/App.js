import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './Component/Book/BookList';
import ManagerBook from './Component/Book/ManagerBook';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' exact={true} component={Home}/>
            <Route path='/book_list' exact={true} component={BookList}/>
            <Route path='/manager_book' exact={true} component={ManagerBook}/>
          </Switch>
        </Router>
    )
  }
}

export default App;