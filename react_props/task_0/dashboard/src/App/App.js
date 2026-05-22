import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <body className="App-body">
            <Login />
          </body>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
