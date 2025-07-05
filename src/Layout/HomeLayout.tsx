
import Footer from '@/shared/Footer/Footer';
import Navbar from '@/shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;