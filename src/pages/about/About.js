import React from 'react'
import Hero from "../../components/hero/Hero";
import Open from "../../components/open/Open";
import Conten from "../../components/conten/Conten";
import Footer from '../../components/footer/Footer';



function About() {
    return (
        <div className='about'>
            <Hero />
            <Open />
            <Conten />
            <Footer />
        </div>
    )
}

export default About