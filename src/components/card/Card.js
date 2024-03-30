import React from 'react'
import "./Card.css"
import { GrLinkNext } from "react-icons/gr";
import { PRODACTCARD } from '../../static/index'


function Card() {

    let prodactItems = PRODACTCARD?.map(el => (
        <div key={el.id} className="card__row">
            <img src={el.url} alt="gdfaf" />
            <div className="card__bottm">
                <h3>{el.title}</h3>
                <h4>{el.description}</h4>
                <button>{el.go}<GrLinkNext className='btn__sds' /></button>
            </div>
        </div>
    )
    )

    return (
        <div className='card'>
            <h2 className='positions'>All posts</h2>
            <div className='card__wrapper'>

                {
                    prodactItems
                }

            </div>
        </div>
    )
}

export default Card