'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/button';
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();

        if (!navigator.onLine) {
            setNetworkError(true);
            setLoginError(false);
            return;
        } else {
            setNetworkError(false);
        }

        let formErrors = { email: '', password: '' };
        if (!email) {
            formErrors.email = 'Tài khoản không hợp lệ';
        }
        if (!password) {
            formErrors.password = 'Sai mật khẩu';
        }

        setErrors(formErrors);

        if (!formErrors.email && !formErrors.password) {
            setLoginError(true);
        } else {
            setLoginError(false);
        }
    };

    return (
        <section className="">
            <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-[780px] h-[384px] p-[40px] bg-white rounded-[16px] shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    {/* Hiển thị thông báo lỗi kết nối mạng */}
                    {/* Hiển thị thông báo lỗi kết nối mạng */}
                    {networkError && (
                        <div className='bg-red-500 text-white px-[24px] py-[8px] flex justify-center w-[780px] rounded-t-[16px]'>
                            <Image
                                src={'/Lilas/wifiOff.svg'}  // Thay đổi hình ảnh thành wifiOff.svg
                                alt='Network Error Icon'
                                width={16}
                                height={16}
                                className='mr-2 justify-center text-center items-center mb-0.25'
                            />
                            <span className='text-center'>Lỗi kết nối mạng</span>  {/* Văn bản đã thay đổi */}
                        </div>
                    )}



                    {/* Hiển thị thông báo lỗi đăng nhập */}
                    {loginError && (
                        <div className='bg-red-500 text-white px-[24px] py-[8px] flex justify-center w-[780px] rounded-t-[16px]'>
                            <Image
                                src={'./Lilas/report.svg'}
                                alt='Alert Icon'
                                width={16}
                                height={16}
                                className='mr-2 justify-center text-center items-center mb-0.25'
                            />
                            <span className='text-center'>Đăng nhập thất bại</span>
                        </div>
                    )}

                    <div className="space-y-4 md:space-y-6 sm:p-8">
                        <form className="grid grid-cols-2 md:space-y-6" onSubmit={handleSubmit}>
                            <div className=''>
                                <div>
                                    <Image
                                        src={"/lilas/Lilas-logo.png"}
                                        alt='Logo'
                                        width={217}
                                        height={28}
                                    />
                                </div>
                                <div className='mt-[25px]'>
                                    <span className="text-[32px] font-sans font-[400] leading-[38px] tracking-tight text-[#000] md:text-2xl">
                                        Đăng nhập
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='mt-[20px]'>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 font-sans text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tên tài khoản
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className={`bg-gray-200 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-full h-[40px] px-[8px] py-[9px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                                        placeholder="Điền tên tài khoản"
                                    />
                                    {errors.email &&
                                        <p className="mt-1 text-sm text-red-500 flex mb-0.5">
                                            <Image
                                                src={'./Lilas/400.svg'}
                                                alt='Alert Icon'
                                                width={16}
                                                height={16}
                                                className='mb-0.5'
                                            />
                                            {errors.email}</p>}
                                </div>
                                <div className='mt-[20px]'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 font-sans text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mật khẩu
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Điền mật khẩu"
                                            className={`bg-gray-200 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-full h-[40px] px-[8px] py-[9px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-[8px] top-[8px] text-gray-600 dark:text-gray-300"
                                        >
                                            {showPassword ? <HiOutlineEyeSlash size={20} /> : <HiOutlineEye size={20} />}
                                        </button>
                                    </div>
                                    {errors.password &&
                                        <p className="mt-1 text-sm text-red-500 flex">
                                            <Image
                                                src={'./Lilas/400.svg'}
                                                alt='Alert Icon'
                                                width={16}
                                                height={16}
                                                className='text-center mb-0.5'
                                            />
                                            {errors.password}</p>}
                                </div>
                            </div>
                            <div className='flex justify-end col-start-2'>
                                <div className='mr-[-8px]'>
                                    <Button />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Page;
