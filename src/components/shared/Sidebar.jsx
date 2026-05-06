'use client'
import React from 'react';

const Sidebar = ({setCategory}) => {

    return (
        <div className='mb-6'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Select Category
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li onClick={()=>setCategory('All')}><a>All</a></li>
                        <li onClick={()=>setCategory('Science')}><a>Science</a></li>
                        <li onClick={()=>setCategory('Story')}><a>Story</a></li>
                        <li onClick={()=>setCategory('Tech')}><a>Tech</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;