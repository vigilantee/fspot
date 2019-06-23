import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './HomeScreen/HomeScreen';
import CartSummary from './CartSummary/CartSummary';
import LoginPage from './LoginPage/LoginPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route path="/cart" component={CartSummary} />
      </Router>
    );
  }
}

export default App;
