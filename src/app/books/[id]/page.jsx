import { getAllBooks } from '@/lib/data';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const books = await getAllBooks();
    const book = books.find(book => book.id == id)
    console.log(books, 'ref');
    return (
        <div>
            <h1>Book Details Page</h1>
            <h1>{book.title}</h1>
        </div>
    );
};

export default BookDetailsPage;