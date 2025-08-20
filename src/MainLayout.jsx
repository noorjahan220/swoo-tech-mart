import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from './Component/Common/Navbar/HomeNavbar';
import Footer from './Component/Common/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col w-11/12 mx-auto">
            <HomeNavbar/>
            
            <main className="flex-grow w-11/12 mx-auto py-4">
                <Outlet />
            </main>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;