import React from 'react'
import './Tab.css'

function Tab() {
    return (
        <div className='MenuMain'>
            <div className='triangle'></div>
            <div className='tabContainer'>
                <ul className='NavMenu'>
                    <li className='NavList'>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Tab
