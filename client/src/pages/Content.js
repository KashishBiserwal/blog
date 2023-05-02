import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Content = () => {
  const [blogs, setBlogs] = useState([]);
  const baseUrl = process.env.REACT_APP_URL;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${baseUrl}/api/blogs`);
      setBlogs(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className='contents-page'>
      <div className='all-blogs'>
        <h1 className='purple'>All Blogs</h1>
        <br />
        {blogs.map((blog) => (
          <ul>
            <li>
              <div key={blog.id}>
                <Link to={`/blogs/${blog.id}`} className='link'><h2>{blog.title}</h2></Link>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>

  )
}
