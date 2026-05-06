'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const MyProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    if(!user){
        redirect('/login')
    }
    return (
        <div className="p-6 flex justify-center items-center mx-auto">
            <div className='border rounded-2xl flex justify-center flex-col  text-center p-4'>
                <div className="flex justify-center items-center">
                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={80} height={80}
                    ></Image>
                </div>
                <h1 className='font-semibold text-xl'>Name: {user?.name}</h1>
                <p>E-mail: {user?.email}</p>
                <Link href={'/update-user'}><button className='btn btn-primary my-5'>Update Profile</button></Link>
            </div>
        </div>
    );
};

export default MyProfilePage;