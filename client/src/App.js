import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './style/style.css';
import SearchResults from './pages/SearchResults';
import { Content } from './pages/Content';
import { SingleBlog } from './pages/SingleBlog';
import { Post } from './pages/Post';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<SearchResults />} />
        <Route path='content' element={<Content />} />
        <Route path='blogs/:id' element={<SingleBlog />} />
        <Route path='post' element={<Post />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
