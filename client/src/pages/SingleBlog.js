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
      }, []);
  return (
    <div className='single-blog-page'>
        <h2>{blog.title}</h2>
        <p className='blog-content'>{blog.content}</p>
    </div>
  )
}
