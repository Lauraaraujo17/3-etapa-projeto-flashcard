import React, { Component } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import Main from './main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;