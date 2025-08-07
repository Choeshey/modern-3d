import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Workprogress from "./components/Workprogress.jsx";
import Portfolia from "./components/Portfolia.jsx";
import Partnerhand from "./components/Partnerhand.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Workprogress/>
            <Portfolia />
            <Partnerhand />

        </div>
    )
}
export default App
