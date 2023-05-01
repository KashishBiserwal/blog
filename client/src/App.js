import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './style/style.css';
import SearchResults from './pages/SearchResults';
import { Content } from './pages/Content';
import { SingleBlog } from './pages/SingleBlog';
import { Post } from './pages/Post';
import { Login } from './pages/Login';
import { useEffect, useState } from 'react';
import { Update } from './components/Update';
import { About } from './pages/About';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const credentials = localStorage.getItem('user-pass');
    if (credentials === process.env.REACT_APP_USERPASS) {
      setAuthenticated(true);
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout authenticated={authenticated} />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path='content' element={<Content />} />
          <Route path='blogs/:id' element={<SingleBlog authenticated={authenticated} />} />
          <Route path='post' element={<Post />} />
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About authenticated={authenticated}/>} />
          <Route path='blogs/:id/update' element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
