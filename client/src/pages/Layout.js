import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = () => {
  return (
    <div className='all'>
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;