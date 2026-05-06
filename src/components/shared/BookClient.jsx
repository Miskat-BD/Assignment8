import React from 'react';
import Sidebar from './Sidebar';
import BookCard from './BookCard';

const BookClient = ({books}) => {
    // console.log(books, 'books clinet');
    return (
         <div>
            <h1 className='text-4xl font-bold text-center my-7'>All Books</h1>
            {/* Search input */}
            <div className="m-3">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
            <div className="flex gap-6">
                <div className=""><Sidebar /></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {
                        books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookClient;