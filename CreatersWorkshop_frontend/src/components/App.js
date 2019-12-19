import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../styles/App.css';
import Home from './pages/Home'
import Live from './pages/Live'
import Talk from './pages/Talk'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact = {true} path = '/' component = {Home}/>
          <Route exact = {true} path = '/live' component = {Live}/>
          <Route exact = {true} path = '/Talk' component = {Talk}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
