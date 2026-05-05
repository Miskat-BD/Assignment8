import React from 'react';
import Img from '@/assets/experience.webp'
import Image from 'next/image';
import Link from 'next/link';
const ExtraSection1 = () => {
    return (
        <div className='max-w-3/4 mx-auto bg-purple-50 rounded-md p-8 my-8'>
            <div className="card lg:card-side bg-purple-50 shadow-sm items-center">
                <figure>
                    <Image
                        src={Img}
                        alt="reads book"
                        width={400} height={300} className='rounded-2xl' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold"> Discover Your Reading Experience!</h2>
                    <p>Explore a wide collection of books from different categories. <br />
                        Borrow your favorite books anytime and enjoy seamless reading.</p>
                    <div className="card-actions justify-center sm:justify-end">
                        <Link href={'/books'}><button className="btn btn-primary mt-3">Explore All Books</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;