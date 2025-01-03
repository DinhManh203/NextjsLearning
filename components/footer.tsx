"use client"

import React, { useState } from 'react'
import LogoFooter from '@/public/logo_footer.png'
import Image from 'next/image';

const navbarHeader = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-[80px] px-4 py-6 lg:py-8 md:grid-cols-4">
                    {/* cột 1 */}
                    <div className="">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            <Image
                                src={LogoFooter}
                                alt="Logo Footer"
                            />
                        </h2>
                        <ul className="text-dark-500 dark:text-gray-400 font-medium">
                            <li className="mb-4 flex flex-row">
                                <a href="#" className="hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect width="24" height="24" rx="12" fill="white" />
                                        <path d="M15.882 6H17.9521L13.4296 11.0831L18.75 18H14.5835L11.3207 13.8049L7.5873 18H5.51596L10.3533 12.5631L5.25 6H9.52096L12.4703 9.83446L15.8808 6H15.882ZM15.1555 16.7815H16.3026L8.89831 7.15446H7.6674L15.1555 16.7815Z" fill="#A3A3A3" />
                                    </svg>
                                </a>
                                <a href="#" className="px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_1122_2255)">
                                            <rect width="24" height="24" rx="12" fill="white" />
                                            <path d="M8.97484 6.19771C9.41948 6.35019 9.84248 6.56098 10.233 6.82468C10.7846 6.68197 11.3518 6.61028 11.9211 6.6113C12.5091 6.6113 13.0763 6.68562 13.608 6.82408C13.9984 6.56063 14.4212 6.35005 14.8656 6.19771C15.2783 6.05565 15.8663 5.82548 16.2156 6.21689C16.4524 6.48302 16.5117 6.92898 16.5537 7.26944C16.6011 7.64947 16.6123 8.14458 16.488 8.63609C16.9634 9.25767 17.25 9.99914 17.25 10.8071C17.25 12.0311 16.5951 13.0939 15.6259 13.8299C15.1594 14.1797 14.642 14.4539 14.0923 14.6427C14.219 14.9364 14.2895 15.2613 14.2895 15.6024V17.4006C14.2895 17.5596 14.2271 17.712 14.1161 17.8244C14.005 17.9368 13.8544 18 13.6974 18H10.1448C9.98779 18 9.83719 17.9368 9.72615 17.8244C9.61511 17.712 9.55272 17.5596 9.55272 17.4006V16.8066C8.98727 16.8767 8.513 16.8144 8.10978 16.6411C7.68821 16.4601 7.39453 16.1796 7.17367 15.9111C6.96407 15.6569 6.73552 15.0839 6.40513 14.9724C6.33134 14.9475 6.26311 14.9082 6.20434 14.8566C6.14557 14.8051 6.09741 14.7423 6.06261 14.6719C5.99232 14.5297 5.98071 14.365 6.03033 14.2142C6.07996 14.0633 6.18675 13.9386 6.32721 13.8674C6.46768 13.7962 6.63031 13.7845 6.77934 13.8347C7.17367 13.9678 7.43064 14.2555 7.6065 14.4869C7.8907 14.8585 8.12162 15.344 8.57162 15.5376C8.75694 15.6174 9.02872 15.6695 9.45384 15.6108L9.55272 15.5904C9.55385 15.2642 9.62096 14.9417 9.74989 14.6427C9.20018 14.4539 8.68282 14.1797 8.21636 13.8299C7.24709 13.0939 6.59223 12.0317 6.59223 10.8071C6.59223 10.0003 6.87822 9.25947 7.35249 8.63849C7.22815 8.14697 7.23881 7.65067 7.28617 7.27004L7.28913 7.24727C7.33236 6.89841 7.38268 6.48782 7.62426 6.21689C7.9736 5.82548 8.56214 6.05625 8.97424 6.19831L8.97484 6.19771Z" fill="#A3A3A3" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1122_2255">
                                                <rect width="24" height="24" rx="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#" className=" hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect width="24" height="24" rx="12" fill="white" />
                                        <path d="M13.7734 6C12.8066 6 11.8794 6.3204 11.1958 6.89072C10.5121 7.46103 10.1281 8.23455 10.1281 9.0411V10.7342H8.17734C8.07961 10.7342 8 10.8 8 10.8822V13.1178C8 13.1993 8.07882 13.2658 8.17734 13.2658H10.1281V17.8521C10.1281 17.9336 10.2069 18 10.3054 18H12.9852C13.083 18 13.1626 17.9342 13.1626 17.8521V13.2658H15.1306C15.2118 13.2658 15.2828 13.2197 15.3025 13.154L15.9724 10.9184C15.979 10.8965 15.9795 10.8738 15.974 10.8517C15.9684 10.8297 15.957 10.8091 15.9404 10.7913C15.9238 10.7736 15.9026 10.7592 15.8784 10.7493C15.8542 10.7394 15.8276 10.7343 15.8006 10.7342H13.1626V9.0411C13.1626 8.97418 13.1784 8.90791 13.2091 8.84608C13.2398 8.78426 13.2847 8.72808 13.3415 8.68076C13.3982 8.63344 13.4655 8.59591 13.5396 8.5703C13.6138 8.54469 13.6932 8.53151 13.7734 8.53151H15.8227C15.9204 8.53151 16 8.46575 16 8.38356V6.14795C16 6.06641 15.9212 6 15.8227 6H13.7734Z" fill="#A3A3A3" />
                                    </svg>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="font-bold">
                                    Địa chỉ: <span className="font-normal text-[14px]">Tầng 5 V1 The Terra An Hưng - La Khê - Hà Đông - Hà Nội</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="font-bold">
                                    Hotline: <span className="font-normal text-[14px]">0343 488 603</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="font-bold">
                                    Email: <span className="font-normal text-[14px]">hello@mediax.com.vn</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* cột 2 */}
                    <div >
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Giải pháp
                        </h2>
                        <ul className="text-[#646466] dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <a href="#" className="">
                                    Đội ngũ nhân sự số
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Nâng cao trải nghiệm khách hàng
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* cột 3 */}
                    <div className="">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Ứng dụng
                        </h2>
                        <ul className="text-[#646466] dark:text-gray-400 font-medium">
                            <li className="mb-2">
                                <a href="#" className="">
                                    Trợ lý ảo A.I
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Quản trị tri thức doanh nghiệp
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Phát triển chất lượng nhân sự
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Dịch vụ khách hàng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Quản trị trải nghiệm khách hàng
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="">
                                    Chăm sóc khách hàng
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        Công ty
                        </h2>
                        <ul className="text-[#646466] dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="">
                                Về chúng tôi
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="">
                                Liên hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default navbarHeader