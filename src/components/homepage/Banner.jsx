import Image from 'next/image';
import heroImg from '@/assets/hero-img.jpg'
import Link from 'next/link';
const Banner = () => {
    return (
        <div className=' container mx-auto md:my-4'>
            <div className="hero  min-h-screen bg-purple-50 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={heroImg}
                        className=" rounded-lg shadow-2xl"
                        alt='banner-img'
                        width={600} height={550}
                    />
                    <div>
                        <div className="animate__animated animate__rotateIn">
                            <h1 className="text-5xl font-bold">Welcome to <span className='font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>BookNest</span></h1>
                        </div>
                        <p className="py-6">
                            Explore top reads,reviews and stories <br /> that inspire and ignite your imagination
                        </p>
                        <Link href={'/books'}><button className="btn btn-primary">Browse Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Banner;