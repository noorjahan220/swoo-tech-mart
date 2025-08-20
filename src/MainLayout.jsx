import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeNavbar from './Component/Common/Navbar/HomeNavbar';
import Footer from './Component/Common/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col w-11/12 mx-auto bg-[#F0F2F5]">
            <HomeNavbar/>
            
            <main className="flex-grow w-11/12 mx-auto">
                <Outlet />
            </main>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;