import React from "react";
import HomeScreen from './HomeScreen/HomeScreen';
import Navbar from "../components/NavBar/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{marginRight:150,marginLeft:150,flexDirection:"row",marginTop:100,display:"flex",alignItems:"center"}}>
          <HomeScreen />
        </div>
      </div>
    );
  }
}

export default App;
