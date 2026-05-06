import BookDetailsClient from '@/components/shared/BookDetailsClient';
import { getAllBooks } from '@/lib/data';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const books = await getAllBooks();
    // console.log(books, id, 'book id');
    // console.log(books, 'ref');
    // 
    return (
        <div className="">
            <BookDetailsClient books={books} id={id}></BookDetailsClient>
        </div>
        
    );
};

export default BookDetailsPage;