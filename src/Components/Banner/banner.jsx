import React from 'react'
import './banner.css'

export const Banner = ({ banner, title, subTitle }) => {

    return (
        <div className="cont-banner">
            <div className="cont-title-banner">
                <h2 className="subTitle-banner">{subTitle}</h2>
                <h1 className="title-banner">{title}</h1>
            </div>
            <img className="img-banner" src={banner} alt="banner" />
        </div>
    )
}