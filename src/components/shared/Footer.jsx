import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral sm:mt-10'>
            <div className="container mx-auto">
                <footer className="footer text-white sm:footer-horizontal p-10 ">
                    <aside>
                        <Link href={'/'} className='text-3xl sm:text-5xl font-bold bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>BookNest</Link>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover text-white">Branding</a>
                        <a className="link link-hover text-white">Design</a>
                        <a className="link link-hover text-white">Marketing</a>
                        <a className="link link-hover text-white">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover text-white">About us</a>
                        <a className="link link-hover text-white">Contact</a>
                        <a className="link link-hover text-white">Jobs</a>
                        <a className="link link-hover text-white">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover text-white">Terms of use</a>
                        <a className="link link-hover text-white">Privacy policy</a>
                        <a className="link link-hover text-white">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
                    <aside className="grid-flow-col items-center">

                        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;