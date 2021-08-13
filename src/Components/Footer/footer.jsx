import React from 'react'
import './footer.css'
import whatsapp from '../../Imagenes/whatsapp.svg'
import phoneCall from '../../Imagenes/phone-call.svg'
import pin from '../../Imagenes/pin.svg'
import { Formulario } from '../Formulario/formulario'

export const Footer = () => {

    return (
        <>
            <div className="cont-footer">
                <div className="form-footer">
                    <Formulario />
                </div>
                <div className="info-footer">
                    <h1 className="title-item-footer">Contacto</h1>
                    <p className="item-footer">
                        <img className="img-footer" src={phoneCall} alt="phoneCall" />
                        0800-000-0000
                    </p>
                    <p className="item-footer">
                        <img className="img-footer" src={whatsapp} alt="whatsapp" />
                        11-00000000
                    </p>
                    <p className="item-footer">
                        <img className="img-footer" src={pin} alt="pin" />
                        Lorem ipsum 555
                    </p>
                </div>
                <div className="info-footer">
                    <h1 className="title-item-footer">Horarios</h1>
                    <p className="item-footer">Lunes a Viernes</p>
                    <p className="item-footer">10:00 - 19:00 hs.</p>
                </div>
            </div>
            <div className="derechos-footer">
                <p>Todos los derechos reservados</p>
            </div>
        </>
    )
}