import React from 'react'
import "./Carhero.css"
import { GrLinkNext } from "react-icons/gr";
import person from "../../assets/images/person.svg"
import picture from "../../assets/images/Header Image (1).png"



function Carhero() {
    return (
        <div className='carhero'>
            <div className="hero__leftt">
                <div className="user">
                    <img src={person} alt="afew" />
                    <h4>Andrew Jonson</h4>
                    <h4>Posted on 27th January 2021</h4>
                </div>
                <h3>Our internal process and longerm vision</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                <button>View Positions <GrLinkNext className='btn__sds' /> </button>
            </div>
            <div className="hero__rightt">
                <img src={picture} alt="asfsd" />
            </div>
        </div>
    )
}

export default Carhero