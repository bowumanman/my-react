import React, { Component } from 'react';
import './App.css';
import './assets/css/index.scss';
// import { Button } from 'antd';
import Routes from './routes';
console.log(Routes, 'Routes');

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
