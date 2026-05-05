import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import user1 from '@/assets/user1.png'
import user2 from '@/assets/user2.png'
import user3 from '@/assets/user3.png'

const ExtraSection2 = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center font-bold'>What Our Readers Say</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10">

                <div className="p-6 bg-white shadow rounded-lg text-center border border-purple-200 hover:shadow-xl transition">
                    <p className="text-gray-500 mb-4">
                        BookNest made it super easy to find and borrow books.
                        The experience is smooth and fast.
                    </p>
                    <div className="flex justify-center"><Image src={user1} alt='Rahim-img' width={80} height={50}></Image></div>
                    <h3 className="font-semibold">— Rahim Ahmed</h3>
                    <p className="text-yellow-500 text-center flex justify-center gap-1"><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>

                <div className="p-6 bg-white shadow rounded-lg text-center border border-purple-200 hover:shadow-xl transition">
                    <p className="text-gray-500 mb-4">
                        I love the clean design and easy navigation.
                        It feels like a real digital library.
                    </p>
                    <div className="flex justify-center"><Image src={user2} alt='Karim-img' width={80} height={50}></Image></div>
                    <h3 className="font-semibold mb-2">— Karim Ahmed</h3>
                    <p className="text-yellow-500 text-center flex justify-center gap-1"><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>

                <div className="p-6 bg-white shadow rounded-lg text-center border border-purple-200 hover:shadow-xl transition">
                    <p className="text-gray-500 mb-4">
                        Finding books by category is খুব easy.
                        Highly recommended for book lovers!
                    </p>
                    <div className="flex justify-center"><Image src={user3} alt='Tanvir-img' width={80} height={50}></Image></div>
                    <h3 className="font-semibold">— Tanvir Ahmed</h3>
                    <p className="text-yellow-500 text-center flex justify-center gap-1"><FaStar /> <FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection2;