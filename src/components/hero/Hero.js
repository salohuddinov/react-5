import React from 'react'
import "./Hero.css"
import hero1 from "../../assets/images/Header image.png"


function Hero() {
    return (
        <div className="hero">
            <div className="hero__left">
                <h3>We hired people who are very passionate about what they do</h3>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.</p>
                <button>View Positions</button>
            </div>
            <div className="hero__right">
                <img src={hero1} alt="fwhregqe" />
            </div>
        </div>
    )
}

export default Hero