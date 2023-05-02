import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

const Home = () => {
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
    <div className='home'>
      <h3 className='purple'>Blogs ({Object.keys(blogs).length})</h3>
      <div className='all-blogs'>
        {blogs.map((blog) => (
          <BlogCard blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default Home;