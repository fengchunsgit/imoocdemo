import React, { Component } from 'react';
import './style.css';
import OrderList from '../OrderList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderList/>
      </div>
    );
  }
}

export default App;
