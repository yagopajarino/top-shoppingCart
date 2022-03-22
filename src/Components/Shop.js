import React, { useState } from "react";
import { useLocation } from 'react-router-dom'

export default function Shop(props) {
    const {data, itemHandler} = props

    return (
        <div className="shopSection">
            <h1>River Fake Shop</h1>
            <div className="shopItems">
            {data.map(item => 
                <div key={item.id} id={item.id} className="tile">
                    <img src={item.img} alt="item"></img>
                    <h3>{item.title}</h3>
                    <span>ARS {item.precio}</span>
                    <button onClick={itemHandler}>Add to cart</button>
                </div>
            )}
            </div>
        </div>

    )
}