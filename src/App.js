import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateTodo from "./createTodo";
import EditTodo from "./editTodo";
import TodosList from './list';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={show:false};
  }
  render(){
  return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
      </a>
      <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
      <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Edit Todo</Link>
                </li>
              </ul>
            </div>
      </nav>
      
        <Route path="/" exact component={TodosList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      
      </div>
    </Router>
    
  );
}
}

export default App;
