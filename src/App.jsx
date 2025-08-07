import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Workprogress from "./components/Workprogress.jsx";
import Portfolia from "./components/Portfolia.jsx";
import Partnerhand from "./components/Partnerhand.jsx";
import Happyclient from "./components/Happyclient.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Cta from "./components/Cta.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Workprogress/>
            <Portfolia />
            <Partnerhand />
            <Happyclient />
            <Testimonial />
            <Cta/>

        </div>
    )
}
export default App
