import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                Xpensr <i className="fi fi-rr-credit-card"></i>
            </div>
            <div className='header-button'>
                <a href="http://github.com//sejalrastogi" target="_blank" rel='noopener noreferrer'>
                <i className="devicon-github-original colored"></i>
                    Star
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header