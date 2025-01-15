'use client'

import React from 'react'
import Image from 'next/image'
import { Noto_Sans } from 'next/font/google';
import PicApp from '@/public/ai-assistance-overview-3.png';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const CustomerExperience = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="relative w-full h-[640px]">
                <Image
                    src={PicApp}
                    alt='Picture Page Customer Experience'
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                />
            </div>

            {/* section 2 */}
            <div className='bg-black lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:px-[142px] lg:py-[80px] md:px-[24px] md:py-[80px] xsm:px-[12px] sm:px-[24px] sm:py-[64px] xsm:py-[32px] xsm:grid-cols-1 sm:grid-cols-1'>
                <div className='px-5'>
                    <h1 className="lg:text-[48px] sm:text-[38px] xsm:text-[29px] font-[600] lg:leading-[56px] sm:leading-[46px] lg:text-left md:text-left sm:text-center xsm:text-center tracking-[-1%] text-white">
                        Dịch vụ khách hàng vượt trội
                    </h1>
                </div>
                <div className="lg:px-10 sm:px-5 lg:text-left md:text-left sm:text-center xsm:text-center">
                    <span className="lg:text-[24px] sm:text-[24px] xsm:text-[24px] font-[500] leading-[32px] text-[#A0A0BD]">
                        Vượt qua giới hạn nguồn nhân lực, bứt phá chất lượng dịch vụ khách hàng thông qua ứng dụng công nghệ Trí tuệ nhân tạo
                    </span>
                </div>
            </div>

            {/* section 3 */}
            <div className='bg-white lg:px-[80px] lg:pt-[120px] md:px-[64px] md:pt-[120px] sm:px-[24px] sm:py-[64px] xsm:px-[24px] xsm:py-[32px]'>
                {/* Nội dung  */}
                <div>
                    <div className="text-center flex flex-col">
                        <span className="lg:text-[48px] md:text-[48px] sm:text-[32px] xsm:text-[24px] font-[600] lg:md:leading-[56px] sm:leading-[39px] xsm:leading-[28px] text-[#131314]">
                            Cải tiến dịch vụ khách hàng
                        </span>
                        <span className="lg:text-[48px] md:text-[48px] sm:text-[32px] xsm:text-[24px] font-[600] lg:md:leading-[56px] sm:leading-[39px] xsm:leading-[28px] text-[#131314]">
                            toàn diện cùng AI
                        </span>
                    </div>

                    {/* Nội dung  */}

                    {/* lg & md hiển thị || sm ẩn */}
                    <div className="text-center lg:flex flex-col mt-5 md:block sm:hidden">
                        <span className="lg:text-[24px] md:text-[24px] sm:text-[21px] font-[500] lg:leading-[32px] md:leading-[32px] sm:leading-[26px] text-[#A0A0BD]">
                            Ứng dụng công nghệ AI giúp doanh nghiệp tự động hóa tác
                        </span>
                        <span className="lg:text-[24px] md:text-[24px] sm:text-[21px] font-[500] lg:leading-[32px] md:leading-[32px] sm:leading-[26px] text-[#A0A0BD]">
                            vụ, giảm chi phí và cung cấp dịch vụ hỗ trợ 24/7 đa kênh.
                        </span>
                    </div>

                    {/* lg $ md ẩn || sm hiện */}
                    <div className="text-center flex flex-col mt-5 lg:hidden sm:block">
                        <span className="lg:md:text-[24px] sm:text-[21px] font-[500] lg:md:leading-[32px] sm:leading-[26px] text-[#A0A0BD]">
                            Ứng dụng công nghệ AI giúp doanh nghiệp tự động hóa tác vụ, giảm chi phí và cung cấp dịch vụ hỗ trợ 24/7 đa kênh.
                        </span>
                    </div>
                </div>
            </div>

            {/* section 4 */}
            <div className="lg:px-[120px] lg:pb-[142px] md:px-[24px] md:pb-[120px] sm:px-[12px] sm:pb-[80px] xsm:px-[6px] xsm:pb-[40px]">
                <div className="">
                    {/* nội dung 1 */}
                    <div className="shadow md:grid md:grid-cols-1 md:grid-flow-col md:rounded-3xl md:mt-[120px] sm:mt-[80px] xsm:mt-[40px] sm:rounded-3xl xsm:rounded-3xl sm:flex sm:flex-col-reverse xsm:flex xsm:flex-col-reverse">
                        <div className='grid grid-rows-1 lg:px-[80px] lg:py-[101] md:px-[40px] md:py-[40px] sm:px-[40px] sm:py-[40px] xsm:px-[30px] xsm:py-[30px]'>
                            <div className='mt-2'>
                                <h1 className='text-[32px] mb-[16px] font-[500] lg:leading-[25px] md:leading-none sm:leading-[34px] xsm:leading-[34px] tracking-[-0.16px] text-[#131314]'>
                                Tự động giải đáp câu hỏi thường gặp (FAQ)
                                </h1>
                                <span className='lg:text-[20px] sm:text-[19px] xsm:text-[19px] lg:leading-[25px] sm:leading-[24px] xsm:leading-[24px] text-[#646466]'>
                                Trợ lý ảo AI vận hành 24/7, giúp doanh nghiệp trả lời tự động, mọi lúc, mọi nơi cho các câu hỏi thường gặp của khách hàng
                                </span>
                                <div className="mt-[40px]">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Thông tin sản phẩm, dịch vụ.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Giờ hoạt động, mạng lưới cửa hàng.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Thông tin liên hệ (hotline, email, mạng xã hội).
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Các câu hỏi thường gặp khác.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src="/ai-ce_pic-1.png"
                                alt="Digital_Picture"
                                className="float-right lg:rounded-s-3xl md:rounded-s-3xl lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] md:block sm:hidden xsm:hidden"
                                width={482}
                                height={540}
                            />
                            <Image
                                src="/ai-ce_pic-1.png"
                                alt="Digital_Picture"
                                className="float-right lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] sm:rounded-t-3xl xsm:rounded-t-3xl sm:w-full xsm:w-full md:hidden sm:block"
                                width={482}
                                height={540}
                            />
                        </div>
                    </div>

                    {/* nội dung 2 */}
                    <div className="shadow md:grid md:grid-cols-1 md:grid-flow-col md:rounded-3xl md:mt-[120px] sm:mt-[80px] xsm:mt-[40px] sm:rounded-3xl xsm:rounded-3xl sm:flex sm:flex-col-reverse xsm:flex xsm:flex-col-reverse">
                        <div className='grid grid-rows-1 lg:px-[80px] lg:py-[101] md:px-[40px] md:py-[40px] sm:px-[40px] sm:py-[40px] xsm:px-[30px] xsm:py-[30px]'>
                            <div className='mt-2'>
                                <h1 className='text-[32px] mb-[16px] font-[500] lg:leading-[25px] md:leading-none sm:leading-[34px] xsm:leading-[34px] tracking-[-0.16px] text-[#131314]'>
                                Tra cứu thông tin sản phẩm dịch vụ
                                </h1>
                                <span className='lg:text-[20px] sm:text-[19px] xsm:text-[19px] lg:leading-[25px] sm:leading-[24px] xsm:leading-[24px] text-[#646466]'>
                                Trợ lý ảo AI có khả năng tư vấn bán hàng, cung cấp các thông tin chi tiết nhất cho khách hàng.
                                </span>
                                <div className="mt-[40px]">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Thông tin sản phẩm, dịch vụ.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Bảng giá sản phẩm, dịch vụ.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Chính sách đặt hàng, hoàn trả, hủy đơn hàng.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Phương thức thanh toán.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src="/ai-ce_pic-2.png"
                                alt="Digital_Picture"
                                className="float-right lg:rounded-s-3xl md:rounded-s-3xl lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] md:block sm:hidden xsm:hidden"
                                width={482}
                                height={540}
                            />
                            <Image
                                src="/ai-ce_pic-2.png"
                                alt="Digital_Picture"
                                className="float-right lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] sm:rounded-t-3xl xsm:rounded-t-3xl sm:w-full xsm:w-full md:hidden sm:block"
                                width={482}
                                height={540}
                            />
                        </div>
                    </div>

                    {/* nội dung 3 */}
                    <div className="shadow md:grid md:grid-cols-1 md:grid-flow-col md:rounded-3xl md:mt-[120px] sm:mt-[80px] xsm:mt-[40px] sm:rounded-3xl xsm:rounded-3xl sm:flex sm:flex-col-reverse xsm:flex xsm:flex-col-reverse">
                        <div className='grid grid-rows-1 lg:px-[80px] lg:py-[101] md:px-[40px] md:py-[40px] sm:px-[40px] sm:py-[40px] xsm:px-[30px] xsm:py-[30px]'>
                            <div className='mt-2'>
                                <h1 className='text-[32px] mb-[16px] font-[500] lg:leading-[25px] md:leading-none sm:leading-[34px] xsm:leading-[34px] tracking-[-0.16px] text-[#131314]'>
                                Cổng thông tin tự phục vụ (self-service)
                                </h1>
                                <span className='lg:text-[20px] sm:text-[19px] xsm:text-[19px] lg:leading-[25px] sm:leading-[24px] xsm:leading-[24px] text-[#646466]'>
                                Trợ lý ảo AI có khả năng tư vấn bán hàng, cung cấp các thông tin chi tiết nhất cho khách hàng.
                                </span>
                                <div className="mt-[40px]">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Tra cứu tình trạng đơn hàng, lịch hẹn.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Hoàn trả, hủy đơn hàng.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Yêu cầu xuất hóa đơn.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Đăng ký sử dụng sản phẩm, dịch vụ.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src="/ai-ce_pic-3.png"
                                alt="Digital_Picture"
                                className="float-right lg:rounded-s-3xl md:rounded-s-3xl lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] md:block sm:hidden xsm:hidden"
                                width={482}
                                height={540}
                            />
                            <Image
                                src="/ai-ce_pic-3.png"
                                alt="Digital_Picture"
                                className="float-right lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] sm:rounded-t-3xl xsm:rounded-t-3xl sm:w-full xsm:w-full md:hidden sm:block"
                                width={482}
                                height={540}
                            />
                        </div>
                    </div>

                    {/* nội dung 4 */}
                    <div className="shadow md:grid md:grid-cols-1 md:grid-flow-col md:rounded-3xl md:mt-[120px] sm:mt-[80px] xsm:mt-[40px] sm:rounded-3xl xsm:rounded-3xl sm:flex sm:flex-col-reverse xsm:flex xsm:flex-col-reverse">
                        <div className='grid grid-rows-1 lg:px-[80px] lg:py-[101] md:px-[40px] md:py-[40px] sm:px-[40px] sm:py-[40px] xsm:px-[30px] xsm:py-[30px]'>
                            <div className='mt-2'>
                                <h1 className='text-[32px] mb-[16px] font-[500] lg:leading-[25px] md:leading-none sm:leading-[34px] xsm:leading-[34px] tracking-[-0.16px] text-[#131314]'>
                                Hệ thống Live Support
                                </h1>
                                <span className='lg:text-[20px] sm:text-[19px] xsm:text-[19px] lg:leading-[25px] sm:leading-[24px] xsm:leading-[24px] text-[#646466]'>
                                Hệ thống hỗ trợ trực tuyến (live support) cho phép hợp nhất các kênh chăm sóc khách hàng trên một nền tảng quản lý.
                                </span>
                                <div className="mt-[40px]">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Tự động chuyển tiếp tin nhắn giữa bot và tư vấn viên.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Quản lý theo ticket, dễ dàng xem lịch sử, đánh dấu hoàn thành và theo dõi các ticket.
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className='flex items-center'>
                                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_613_147904)">
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                                                <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                                            </g>
                                        </svg>
                                        <span className='text-[17px] font-[500] text-[#131314]'>
                                        Tích hợp quản lý đa nền tảng như Facebook, Instagram, WhatsApp và website.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src="/ai-ce_pic-4.png"
                                alt="Digital_Picture"
                                className="float-right lg:rounded-s-3xl md:rounded-s-3xl lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] md:block sm:hidden xsm:hidden"
                                width={482}
                                height={540}
                            />
                            <Image
                                src="/ai-ce_pic-4.png"
                                alt="Digital_Picture"
                                className="float-right lg:w-[482px] lg:h-[540px] md:w-[456px] md:h-[540px] sm:rounded-t-3xl xsm:rounded-t-3xl sm:w-full xsm:w-full md:hidden sm:block"
                                width={482}
                                height={540}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className='bg-black lg:px-[142px] lg:py-[120px] md:px-[142px] md:py-[120px] sm:px-[24px] sm:py-[80px] xsm:px-[24px] xsm:py-[60px]'>
                <div className="flex flex-col lg:justify-center lg:text-center md:justify-center md:text-center mb-20">
                    <h3 className="lg:text-[48px] md:text-[48px] sm:text-[32px] xsm:text-[28px] sm:leading-[39px] xsm:leading-[39px] text-white font-semibold text-center">Ứng dụng các công nghệ AI tiên tiến </h3>
                </div>
                <div className="mt-5">
                    <div className='grid lg:grid-cols-3 gap-4 md:grid md:grid-rows'>
                        {/* ô 1  */}
                        <div className=''>
                            <div className='flex relative h-[202px] p-[40px] bg-[#171824] rounded-[40px] border-[2px] border-[#1F2634]'>
                                {/* icon và chữ trong cùng một thẻ div */}
                                <div className='flex flex-col'>
                                    <Image
                                        src={"/support_agent.svg"}
                                        alt='Icon'
                                        width={48}
                                        height={48}
                                    />
                                    <div className='mt-5'>
                                        <span className='text-white text-[20px] font-[500]' style={{
                                            background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            Phục vụ { }

                                        </span>
                                        <span className='text-white text-[20px] font-[500]'>
                                            khách hàng 24/7, mọi lúc, mọi nơi
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ô 2  */}
                        <div className=''>
                            <div className='flex relative h-[202px] p-[40px] bg-[#171824] rounded-[40px] border-[2px] border-[#1F2634]'>
                                {/* icon và chữ trong cùng một thẻ div */}
                                <div className='flex flex-col'>
                                    <Image
                                        src={"/robot_2.svg"}
                                        alt='Icon'
                                        width={48}
                                        height={48}
                                    />
                                    <div className='mt-5'>
                                        <span className='text-white text-[20px] font-[500]' style={{
                                            background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            Trợ lý ảo { }

                                        </span>
                                        <span className='text-white text-[20px] font-[500]'>
                                            với kiến thức chuyên sâu về ngành
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ô 3  */}
                        <div className=''>
                            <div className='flex relative h-[202px] p-[40px] bg-[#171824] rounded-[40px] border-[2px] border-[#1F2634]'>
                                {/* icon và chữ trong cùng một thẻ div */}
                                <div className='flex flex-col'>
                                    <Image
                                        src={"/interactive_space.svg"}
                                        alt='Icon'
                                        width={48}
                                        height={48}
                                    />
                                    <div className='mt-5'>
                                        <span className='text-white text-[20px] font-[500]' style={{
                                            background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            Tương tác  { }

                                        </span>
                                        <span className='text-white text-[20px] font-[500]'>
                                            tự nhiên như người thật
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ô 4  */}
                        <div className=''>
                            <div className='flex relative h-[202px] p-[40px] bg-[#171824] rounded-[40px] border-[2px] border-[#1F2634]'>
                                {/* icon và chữ trong cùng một thẻ div */}
                                <div className='flex flex-col'>
                                    <Image
                                        src={"/desktop_cloud_stack.svg"}
                                        alt='Icon'
                                        width={48}
                                        height={48}
                                    />
                                    <div className='mt-5'>
                                        <span className='text-white text-[20px] font-[500]' style={{
                                            background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            Tích hợp  { }

                                        </span>
                                        <span className='text-white text-[20px] font-[500]'>
                                            đa kênh
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ô 5  */}
                        <div className=''>
                            <div className='flex relative h-[202px] p-[40px] bg-[#171824] rounded-[40px] border-[2px] border-[#1F2634]'>
                                {/* icon và chữ trong cùng một thẻ div */}
                                <div className='flex flex-col'>
                                    <Image
                                        src={"/cloud_done.svg"}
                                        alt='Icon'
                                        width={48}
                                        height={48}
                                    />
                                    <div className='mt-5'>
                                        <span className='text-white text-[20px] font-[500]'>
                                            Xây dựng trên { }
                                        </span>
                                        <span className='text-white text-[20px] font-[500]' style={{
                                            background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}>
                                            hạ tầng Dedicated Cloud  { }

                                        </span>
                                        <span className='text-white text-[20px] font-[500]'>
                                            mạnh mẽ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomerExperience