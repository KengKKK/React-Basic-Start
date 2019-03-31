import React, { Component } from 'react';
import './App.css';

// import FormInput from './components/FormInput'
import GetValue from './components/GetValue'
class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <FormInput /> */}
        <GetValue />
      </div>


    );
  }
}

export default App;
