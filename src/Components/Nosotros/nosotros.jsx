import React from 'react'
import './nosotros.css'
import ICONOSillon from '../../Imagenes/ICONO_Sillon.png'

export const Nosotros = () => {

    return (
        <div className="cont-nosotros">

            <img className="img-nosotros" src={ICONOSillon} alt="sillon" />

            <div className="sub-cont">
                <h1 className="nosotros-title">Nosotros</h1>
                <p className="nosotros-txt">
                    {`Nos dedicamos al diseño y restauración de muebles a pedido y a
                    tu gusto, para que sean únicos, irrepetibles y funcionales.
                    Nuestros diseños nacen de la imaginación y la pasión que
                    sentimos al crearlos. Buscamos generar piezas únicas en tu
                    espacio, priorizando sobre todo el confort.
                    Trabajamos muebles con espejos, con pintura glitter y con resina
                    epóxica.`}
                </p>
            </div>
        </div>
    )
}