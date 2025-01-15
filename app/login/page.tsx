import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'

const page = () => {
    return (
        <section className="">
            <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-[780px] h-[384px] bg-white rounded-[16px] shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-[40px] space-y-4 md:space-y-6 sm:p-8">
                        <form className="grid grid-flow-col md:space-y-6 ml-auto" action="#">
                            <div className=''>
                                <div>
                                    <Image
                                        src={"/lilas/Lilas-logo.png"}
                                        alt='Logo'
                                        width={217}
                                        height={28}
                                    />
                                </div>
                                <div>
                                    <span className="text-[32px] font-sans font-[400] leading-[38px] tracking-tight text-[#000] md:text-2xl">
                                        Đăng nhập
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 font-sans text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tên tài khoản
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-[419px] h-[40px] px-[8px] py-[9px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Điền tên tài khoản"
                                        required
                                    />
                                </div>
                                <div className='mt-[40px]'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 font-sans text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Điền mật khẩu"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-[419px] h-[40px]  px-[8px] py-[9px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-end mr-[35px]">
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
