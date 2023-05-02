import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

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
                    <h2 className='small-font'>Full Stack Web Developer</h2>
                    <br />
                    <div className='contact'>
                        <a href='https://www.linkedin.com/in/kashishbiserwal/'><BsLinkedin /></a>
                        <a href='https://github.com/KashishBiserwal'><BsGithub /></a>
                        <a href='https://kashish.live' title='My website'><CgWebsite /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
