'use client'
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user
    // console.log(user, 'sess', isPending, 'pending');
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/books'}>All Books</NavLink></li>
        <li><NavLink href={'/my-profile'}>My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className='text-3xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>BookNest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    isPending ? <span className="loading loading-ring loading-xl"></span> : user ? <div className="flex justify-between gap-2 items-center">
                        <h1>Welcome, {user.name}</h1>
                        <button className="btn bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white" onClick={async () => await authClient.signOut()}>Log Out</button>
                    </div> : <Link href={'/login'} className=""><button className="btn bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;