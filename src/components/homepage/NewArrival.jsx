import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrival = () => {
    return (
        <div className='container mx-auto flex justify-between items-center px-2 bg-gray-200 gap-4 py-4'>
            <button className='bg-red-600 btn text-white max-w-60'>New Arrival</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p>Marhaba Javascripte Maro Thaba - Jhankar Mahbub | Special Discount on Memberships...</p>
            </Marquee>
        </div>
    );
};

export default NewArrival;