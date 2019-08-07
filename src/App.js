import React from 'react';
import './App.css';
import Home from './scenes/Home/Home'
import Login from './components/Login/Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
class App extends React.Component {

  state = {
  }

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home/">Home ruta</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>
        
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/login/"  component ={Login}/>
      </div>
    </Router>
    );
  }

}

export default App;
