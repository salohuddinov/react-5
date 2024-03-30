import React from 'react'
import "./Open.css"
import { PRODACT } from '../../static/index'


function Open() {
    let prodactItems = PRODACT?.map(el => (
        <div key={el.id} className="card__content">
            <h3>{el.name}</h3>
            <h4>{el.title}</h4>
            <button>{el.apple}</button>
        </div>
    )
    )
    return (
        <>
            <h2 className='positions'>See our open positions </h2>
            <div className='wrapper'>

                {
                    prodactItems
                }

            </div>
        </>
    )
}


export default Open