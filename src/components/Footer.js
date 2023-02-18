import React from 'react'
import Twitter from '../images/TwitterIcon.png'
import Facebook from '../images/FacebookIcon.png'
import Instagram from '../images/InstagramIcon.png'
import Github from '../images/GitHubIcon.png'

export default function Footer() {
    return (
        <footer className='foot-sec'>
            <img className='foot-icon-1' src={Twitter}></img>
            <img className='foot-icon' src={Facebook}></img>
            <img className='foot-icon' src={Instagram}></img>
            <img className='foot-icon-2' src={Github}></img>
        </footer>
    )
}

