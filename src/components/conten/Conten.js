import React from 'react'
import "./Conten.css"
import { GrLinkNext } from "react-icons/gr";
import rasm1 from "../../assets/images/Image (1).png"
import rasm2 from "../../assets/images/Image (2).png"
import rasm3 from "../../assets/images/Image (3).png"






function Conten() {
    return (
        <div className='conten'>
            <div className="container">
                <h2>Latest Blog & News</h2>
                <div className="sviper">
                    <div className="cardd">
                        <img src={rasm3} alt="fandfjd" />
                        <div className="cardd__bootm">
                            <h4>Why you have to digitalize in 2021</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button>Lern more <GrLinkNext className='btn__sds' /> </button>
                        </div>
                    </div>
                    <div className="cardd">
                        <img src={rasm1} alt="fandfjd" />
                        <div className="cardd__bootm">
                            <h4>Our internal process and longerm vision</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button>Lern more <GrLinkNext className='btn__sds' /> </button>
                        </div>
                    </div>
                    <div className="cardd">
                        <img src={rasm2} alt="fandfjd" />
                        <div className="cardd__bootm">
                            <h4>Helping the next generation of leaders</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button>Lern more <GrLinkNext className='btn__sds' /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conten