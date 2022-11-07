import React from 'react'
import '../pageStyles/services.css'

export default function Services(props) {


    return (
        <div style={{height: `${props.innerHeight}px`, width: `${props.innerWidth}px`}} id="services" className="services">
            <div className="services_wrapper">
                <div className="services_wrapper_section">
                    <h1 className="services_wrapper_section_h1">SERVICES</h1>
                </div>
            </div>
        </div>

    )
}
