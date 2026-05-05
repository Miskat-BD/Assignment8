import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    // console.log(book, 'book');
    return (
        <div className="card bg-base-100 shadow-sm border border-gray-200 p-3">
            <figure className='p-2 h-48'>
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={150} height={50} /> 
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{book.title}</h2>
                <div className="card-actions justify-center">
                    <Link href={`/books/${book.id}`}><button className="btn btn-outline btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;