import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
    return (
        <Link to={`/blogs/${blog.id}`} className='link'>
            <div className="blog-card">
                <div className='content'>
                    <h1>{blog.title}</h1>
                    <br />
                    <p>{blog.description}</p>
                    <p className='date'>{blog.date}</p>
                </div>
            </div>
        </Link>
    )
}
