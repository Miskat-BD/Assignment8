'use client'
import { getAllBooks } from '@/lib/data';
import React from 'react';
import BookCard from './BookCard';

const Sidebar = () => {
    const getAllBooks = async () => {
        const res = await fetch('https://booknest-server-8uc0.onrender.com/books')
        const data = await res.json();
        return data
    }
    const handleFilter = async (category) => {
        {
            const books = await getAllBooks();
            const filterData = books.filter(item => item.category == category)
            console.log(filterData, 'f');
            filterData.map(book => <BookCard key={book.id} book={book}></BookCard>)
            return
        }
    }
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
                        <li onClick={() => handleFilter('Science')}><a>Science</a></li>
                        <li><a>Story</a></li>
                        <li><a>Tech</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;