import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='outer'>
      <div className='inner'>
        <Link to='/' className='link logo'><h1>KashishBlogs</h1></Link>
        <div className='header-right'>
          <SearchBar />
          <div className='header-buttons'>
            <Link to='/content' className='link contents button'><h4>Content</h4></Link>
            <Link to='/post' className='link post button'><h4>Post</h4></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
