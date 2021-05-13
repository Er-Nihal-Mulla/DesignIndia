import React from 'react'
import Services1 from "../components/Serives/Services1";
import Services2 from "../components/Serives/Services2";
import Services3 from "../components/Serives/Services3";


const Service = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="services__text">
                <h1>Services we offer.</h1>
                </div>
            </div>
            <Services1/>
            <Services2/>
            <Services3/>
        </div>
    )
}

export default Service
