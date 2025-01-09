"use client"

import React, { useState } from 'react'
import LogoHeader from '@/public/solution_1.png'
import Image from 'next/image';

const navbarHeader = () => {
    return (
        <nav className="bg-white">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-5">
                <Image
                    src={LogoHeader}
                    alt='LogoHeader'
                    width='135'
                    height='28' 
                />
                <button
                    data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400"
                    aria-controls="mega-menu-full"
                    aria-expanded="false"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    id="mega-menu-full"
                    className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='text-slate-500 hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer '>
                            <a href="/">Tổng quan</a>
                        </li>
                        <li className=''>
                            <div className='group'>
                                <button className='text-slate-500 hover:text-black transition border-b-2 border-white hover:border-black cursor-pointer'>Giải pháp</button>
                                <div className='hidden group-hover:flex flex-col absolute top-[36px] left-0 p-10 px-20 pl-[8.7rem] w-full bg-white z-20 text-black duration-300 mb-10 mt-3'>
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
                                <div className='hidden group-hover:flex flex-col absolute top-[36px] left-0 p-10 px-20 pl-[8.7rem] w-full bg-white z-20 text-black duration-300 mb-10 mt-3'>
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
            </div>
        </nav>
    )
}

export default navbarHeader