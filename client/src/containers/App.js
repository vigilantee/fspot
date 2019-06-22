import React from "react";
// import NavBar from "../components/NavBar/NavBar";
import HomeScreen from './HomeScreen/HomeScreen';
import { StickyContainer } from 'react-sticky'
import Navbar from "../components/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <StickyContainer>
        <Navbar />
        <HomeScreen />
      </StickyContainer>
    );
  }
}

export default App;
