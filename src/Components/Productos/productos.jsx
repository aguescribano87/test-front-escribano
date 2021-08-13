import React from 'react'
import './productos.css'
import { Items } from '../../Files/Items'
import { Button } from '../button/button'

export const Productos = () => {

    return (
        <div className="cont-gral-prod">
            <div className="cont-productos">
                {Items.map(item =>
                    <div>
                        <img src={item.img} alt="item" />
                        <h1 className="title-productos">{item.title}</h1>
                        <p className="cat-productos">{item.cat}</p>
                    </div>
                )}
            </div>
            <Button value="VER MÁS" />
        </div>
    )
}