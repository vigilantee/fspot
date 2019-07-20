import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './HomeScreen/HomeScreen';
import CartSummary from './CartSummary/CartSummary';
import Cocodevs from './Cocodevs/Cocodevs';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/cart" component={CartSummary} />
        <Route path="/cocodevs" component={Cocodevs} />
      </Router>
    );
  }
}

export default App;
