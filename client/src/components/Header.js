import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaBars } from 'react-icons/fa';

export default function Header({ authenticated }) {

  function handleLogout() {
    localStorage.removeItem('user-pass');
    window.location.href = "/";
  }
  function toggleMenu() {
    const menu = document.querySelector('.header-right');
    menu.classList.toggle('active');
  }

  return (
    <div className='outer'>
      <div className='inner'>
        <Link to='/' className='link logo'><h2>Kashish</h2></Link>
        <div className='header-right'>
          <SearchBar />
          <div className='header-buttons'>
            <Link to='/content' className='link contents button'><h4>Content</h4></Link>
            <Link to='/about' className='link contents button'><h4>About Me</h4></Link>
            {authenticated && <Link to='/post' className='link post button'><h4>Post</h4></Link>}
            {authenticated && <Link to='/logout' className='link post button' onClick={handleLogout}><h4>Logout</h4></Link>}
          </div>
        </div>
        <FaBars className='bars' onClick={toggleMenu} />
      </div>
    </div>
  )
}
