import { Link, useLocation } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const blogs = location.state.results;

  return (
    <div className='all-blogs search-results'>
      <h1>Search Results</h1>
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
  );
}
