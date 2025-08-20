import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="w-screen overflow-x-hidden">
            
            <div className="w-11/12 mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;