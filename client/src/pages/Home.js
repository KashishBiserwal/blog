import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

const Home = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8080/api/blogs');
      setBlogs(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className='home'>
      <div className='all-blogs'>
        {blogs.map((blog) => (
          <BlogCard blog={blog}/>
        ))}
      </div>
    </div>
  );
};

export default Home;