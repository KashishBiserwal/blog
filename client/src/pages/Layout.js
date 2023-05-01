import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({authenticated}) => {
  return (
    <div className='all'>
      <Header authenticated={authenticated}/>
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;