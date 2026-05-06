'use client'
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const BookDetailsClient = ({books, id}) => {
    const book = books.find(book => book.id == id)
    const handleBorrowBtn = () => {
        toast.success(`${book.title} is Borrow Successfully`)
    }
    return (
        <div className='container mx-auto mt-10'>
            <div className="card lg:card-side bg-base-100 shadow-sm gap-10">
                <figure className='w-3/6 flex justify-center items-center mx-auto'>
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        width={600} height={400} />
                </figure>
                <div className="space-y-5 max-sm:w-80 mx-auto text-justify">
                    <h2 className=" text-2xl">{book.title}</h2>
                    <p className=''>By: {book.author}</p>
                    <p className=''>Description: {book.description}</p>
                    <p className=''>Available Quantity: {book.available_quantity}</p>
                    <div className="card-actions justify-end max-sm:justify-center max-sm:mb-7">
                        <button className="btn btn-primary" onClick={handleBorrowBtn}>Borrow This Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsClient;