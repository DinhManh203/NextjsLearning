"use client"

import React, {useState} from 'react'
import LogoHeader from '@/public/solution_1.png'
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

const navbarHeader = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = 
    <>
            <div className='lg:hidden z-50 block absolute top-16 w-full left-0 right-0 bg-white'>
            <div className='flex items-center flex-1'>
                    <Image
                        src={LogoHeader}
                        alt='LogoHeader'
                        width='116'
                        height='24' />
                </div>
                <ul className='flex gap-8 mr-16 text-[17px]'>
                    <li className='my-4 py-4 border-b'>
                        <a href=""></a>
                    </li>

                    <li className='hover:text-black transition border-b-2 border-white'>
                        <a href=""></a>
                    </li>

                    <li className='hover:text-black transition border-b-2 border-white'>
                        <a href=""></a>
                    </li>
                </ul>
            </div>
    </>
    return (
        <nav className='z-50'>
            <div className='h-10vh flex justify-between lg:py-5 px-20 py-20 border-none'>
                <div className='flex items-center flex-1'>
                    <Image
                        src={LogoHeader}
                        alt='LogoHeader'
                        width='135'
                        height='28' />
                </div>
                <div className='lg:flex md-flex flex-1 justify-center items font-normal hidden'>
                    <ul className='flex gap-8 mr-16 text-[17px]'>
                        <li className='text-slate-500 hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer '>
                            <a href="/">Tổng quan</a>
                        </li>

                        {/* Giải pháp  */}
                        <li className=''>
                            <div className='group'>
                                <button className='text-slate-500 hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer'>Giải pháp</button>
                                <div className='hidden group-hover:flex flex-col absolute left-0 p-10 px-20 w-full bg-white z-20 text-black duration-300 mb-10'>
                                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5'>
                                        <div className='flex flex-col'>
                                            <h3 className='font-sans text-[14px] text-[#A3A3A3]'>Media Giải pháp</h3>

                                            {/* Đội ngũ nhân sự số  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Đội ngũ nhân sự số
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                        </div>
                                        <div className='flex flex-col'>
                                            <h3 className='font-sans text-[14px] text-[#A3A3A3]'>Ứng dụng</h3>

                                            {/* Trợ lý ảo AI toàn diện  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Trợ lý ảo AI toàn diện
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                            {/* Phát triển chất lượng nhân sự với AI  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Phát triển chất lượng nhân sự với AI
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                            {/* Nền tảng quản trị tri thức doanh nghiệp  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Nền tảng quản trị tri thức doanh nghiệp
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5 mt-3'>
                                        <div className='flex flex-col'>

                                            {/* Nâng cao trải nghiệm khách hàng  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Nâng cao trải nghiệm khách hàng
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className='flex flex-col'>

                                            {/* Dịch vụ khách hàng  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Dịch vụ khách hàng
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                            {/* Quản trị trải nghiệm khách hàng  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Quản trị trải nghiệm khách Hàng
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                            {/* Chăm sóc khách hàng chủ động với AI  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Chăm sóc khách hàng chủ động với AI
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Công ty  */}
                        <li className=''>
                            <div className='group'>
                                <button className='text-slate-500 hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer'>Công ty</button>
                                <div className='hidden group-hover:flex flex-col absolute left-0 p-10 px-20 w-full bg-white z-20 text-black duration-300 mb-10'>
                                    <div className='grid grid-cols-2 md:grid-cols-2 gap-5'>
                                        <div className='flex flex-col'>
                                            <h3 className='font-sans text-[14px] text-[#A3A3A3]'>Công ty chúng tôi</h3>

                                            {/* About Us  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Về chúng tôi
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                        </div>
                                        <div className='flex flex-col'>
                                            <h3 className='font-sans text-[14px] text-[#A3A3A3]'>Liên hệ</h3>

                                            {/* Contact Us  */}
                                            <a href="/" className='flex items-center text-[17px] mt-3'>
                                                Thông tin liên hệ
                                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#005FE3" />
                                                </svg>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                {click && content}
            </div>
            <button className='block sm:hidden transition-none' onClick={handleClick}>
                {click ? <FaTimes className="text-black" /> : <CiMenuFries className="text-black" />}
            </button>
            </div>
        </nav>
    )
}

export default navbarHeader