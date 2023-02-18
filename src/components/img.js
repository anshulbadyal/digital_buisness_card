import React from 'react'
import img from '../images/img.jpg'

export default function Image() {
    return (
        <div>
            {/* The below is used only for devlopment when img is kept in public folder
            <img src="/images/1.jpg" className="foot-img"/>
            The below is used when images folder is kept in src folder
            <img src={require('../images/img.jpg')} className="foot-img"/>
            The below can be used in prod when img in public folder
            <img src='%PUBLIC_URL%/images/img.jpg' className="foot-img"/> */}
            <img src={img} className="body-img" alt='oops'/>
        </div>
    )
}
