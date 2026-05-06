import BookClient from '@/components/shared/BookClient';
import { getAllBooks } from '@/lib/data';
import React from 'react';

const BooksPage = async () => {
    const books = await getAllBooks();
    return (
        <div className="">
            <BookClient books={books}/>
        </div>
       
    );
};

export default BooksPage;