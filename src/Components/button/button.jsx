import React from 'react'
import './button.css'

export const Button = ({ value, disabled, onClick, position }) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`boton ${position}`}>
            {value}
        </button>
    )
}