import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
    return (
        <Link to={`/blogs/${blog.id}`} className='link'>
            <div className="blog-card">
                <img src={blog.image} alt={blog.title} />
                <div className='content'>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            </div>
        </Link>
    )
}
