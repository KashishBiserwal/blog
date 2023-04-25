import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const SingleBlog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(`http://localhost:8080/api/blogs/${id}`);
          setBlog(result.data);
        };
        fetchData();
      }, [id]);
  return (
    <div className='single-blog-page'>
        <img src={blog.image} alt='blog.title' className='img' />
        <div className='details'>
          <p>Last Updated: {blog.date}</p>
        </div>
        <h1>{blog.title}</h1>
        <p className='blog-content' dangerouslySetInnerHTML={{ __html: blog.content }}></p>
    </div>
  )
}
