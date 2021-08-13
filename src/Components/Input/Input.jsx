import React from 'react'
import './Input.css'

export const Input = ({ type, value, onChange, label }) => {

    return (
        <div className="cont-input">
            <label className="label">{label}</label>
            <input onChange={onChange} className="input" value={value} type={type} />
        </div>
    )
}