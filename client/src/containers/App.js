import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import NavBar from '../components/NavBar/NavBar';

class App extends React.Component {
    render() {
        return (
            <ParallaxProvider>
                    <NavBar />
            </ParallaxProvider>
        );
    }
}

export default App;
