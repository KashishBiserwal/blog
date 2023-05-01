import React from 'react'
import { Link } from 'react-router-dom'

export const About = ({ authenticated }) => {
    return (
        <div className='about'>
            {!authenticated && <Link to='/login' className='link login-btn'><h4>Login</h4></Link>}
            <br />
            <div className='about-page'>
                <div className='image'>
                    <img src='images/me.jpg' />
                </div>
                <div className='details'>
                    <h4>Hi, I am</h4>
                    <h2>Kashish</h2>
                    <h2>Full Stack Web Developer</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
