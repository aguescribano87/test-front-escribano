import React, { useState } from 'react'
import './formulario.css'
import { Input } from '../Input/Input'
import { Button } from '../button/button'
import axios from 'axios'

export const Formulario = () => {
    const [enviado, setEnviado] = useState(false)

    const [consulta, serConsulta] = useState({
        nombre: "",
        email: "",
        tel: "",
        provincia: "",
        hora: "",
        cons: ""
    })

    const envioDeFormulario = () => {
        const options = {
            method: 'post',
            url: '/api/front-test',
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            headers: {
                'test-key': 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ'
            }
        };

        axios(options)
            .then((res) => {
                if (res.status === 200) {
                    setEnviado(!enviado)
                }
            })

    }
    return (

        <>
            {enviado ? <h1 className="title-item-footer">Formulario Enviado Correctamente</h1> :
                <>
                    <h1 className="title-item-footer">Formulario</h1>
                    <div className="cont-formulario">
                        <div className="cont-inputs1">
                            <Input label="Nombre" type="text" onChange={(e) => serConsulta({ ...consulta, nombre: e.target.value })} />
                            <Input label="E-mail" type="email" onChange={(e) => serConsulta({ ...consulta, email: e.target.value })} />
                            <Input label="Teléfono" type="number" onChange={(e) => serConsulta({ ...consulta, tel: e.target.value })} />
                        </div>
                        <div className="cont-inputs2">
                            <Input label="Provincia" type="text" onChange={(e) => serConsulta({ ...consulta, provincia: e.target.value })} />
                            <Input label="Horario de contacto" type="text" onChange={(e) => serConsulta({ ...consulta, hora: e.target.value })} />
                            <Input label="Consulta" type="text" onChange={(e) => serConsulta({ ...consulta, cons: e.target.value })} />
                        </div>
                    </div>
                    <Button onClick={envioDeFormulario} position="right" value="ENVIAR" />
                </>
            }
        </>
    )
}