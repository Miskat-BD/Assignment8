import React from 'react';
import BookCard from '../shared/BookCard';
const getBooks = async ()=>{
    const res = await fetch('https://booknest-server-8uc0.onrender.com/books')
    const data = await res.json();
    return data
}
const FeaturedSection = async () => {
    const books = await getBooks();
    // console.log(books, 'books');
    return (
        <div className='container mx-auto text-center my-10'>
            <h1 className='text-4xl font-bold'>Featured Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-10">
                {
                books.slice(0,4).map(book=> <BookCard key={book.id} book={book}></BookCard>)
            }
            </div>
        </div>
    );
};

export default FeaturedSection;