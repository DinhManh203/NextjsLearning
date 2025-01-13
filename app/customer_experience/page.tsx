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
            <div className='bg-black grid grid-cols-2' style={{ padding: '80px 142px' }}>
                <div className='px-5'>
                    <h1 className="text-[48px] font-[600] leading-[56px] tracking-[-1%] text-white">
                        Dịch vụ khách hàng vượt trội
                    </h1>
                </div>
                <div className="px-10">
                    <span className="text-[24px] font-[500] leading-[32px] text-[#A0A0BD]">
                        Vượt qua giới hạn nguồn nhân lực, bứt phá chất lượng dịch vụ khách hàng thông qua ứng dụng công nghệ Trí tuệ nhân tạo
                    </span>
                </div>
            </div>

            {/* section 3 */}
            <div className='bg-white px-[80px] py-[120px]'>

                {/* Nội dung  */}
                <div>
                    <div className="text-center flex flex-col">
                        <span className="text-[48px] font-[600] leading-[56px] text-[#131314]">
                            Cải tiến dịch vụ khách hàng
                        </span>
                        <span className="text-[48px] font-[600] leading-[56px] text-[#131314]">
                            toàn diện cùng AI
                        </span>
                    </div>
                    <div className="text-center flex flex-col mt-5">
                        <span className="text-[24px] font-[500] leading-[32px] text-[#A0A0BD]">
                            Ứng dụng công nghệ AI giúp doanh nghiệp tự động hóa tác
                        </span>
                        <span className="text-[24px] font-[500] leading-[32px] text-[#A0A0BD]">
                            vụ, giảm chi phí và cung cấp dịch vụ hỗ trợ 24/7 đa kênh.
                        </span>
                    </div>
                </div>
            </div>


            {/* section 4 */}
            <div className="px-[120px] pb-[142px]">
                <div className="">
                    {/* nội dung 1 */}
                    <div className="shadow grid grid-cols-1 grid-flow-col rounded-3xl mt-[120px]">
                        <div className='grid grid-rows-1 px-[80px] py-[101]'>
                            <h1 className='text-[32px] font-[500] leading-[25px] tracking-[-0.16px] text-[#131314]'>
                                Tự động giải đáp câu hỏi thường gặp (FAQ)
                            </h1>
                            <div className='mt-2'>
                                <span className='text-[20px] leading-[25px] text-[#646466]'>
                                    Trợ lý ảo AI vận hành 24/7, giúp doanh nghiệp trả lời tự động, mọi lúc, mọi nơi cho các câu hỏi thường gặp của khách hàng
                                </span>
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
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src={"/ai-ce_pic-1.png"}
                                alt='Digital_Picture'
                                width={482}
                                height={540}
                                className="float-right rounded-s-3xl"
                            />
                        </div>
                    </div>

                    {/* nội dung 2 */}
                    <div className="shadow grid grid-cols-1 grid-flow-col rounded-3xl mt-[120px]">
                        <div className='grid grid-rows-1 px-[80px] py-[101]'>
                            <h1 className='text-[32px] font-[600] leading-[38px] tracking-[-0.16px] text-[#131314]'>
                                Tra cứu thông tin sản phẩm dịch vụ
                            </h1>
                            <div className='mt-2'>
                                <span className='text-[20px] leading-[25px] tracking-[-0.05px] text-[#646466]'>
                                    Trợ lý ảo AI có khả năng tư vấn bán hàng, cung cấp các thông tin chi tiết nhất cho khách hàng.
                                </span>
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
                                    <span className='text-[17px] font-[500] leading-[22px] text-[#131314]'>
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
                                    <span className='text-[17px] font-[500] leading-[22px] text-[#131314]'>
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
                                    <span className='text-[17px] font-[500] leading-[22px] text-[#131314]'>
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
                                    <span className='text-[17px] font-[500] leading-[22px] text-[#131314]'>
                                        Phương thức thanh toán.
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src={"/ai-ce_pic-2.png"}
                                alt='Digital_Picture'
                                width={482}
                                height={540}
                                className="float-right rounded-s-3xl"
                            />
                        </div>
                    </div>

                    {/* nội dung 3 */}
                    <div className="shadow grid grid-cols-1 grid-flow-col rounded-3xl mt-[120px]">
                        <div className='grid grid-rows-1 px-[80px] py-[101]'>
                            <h1 className='text-[32px] font-[500] leading-[38px] tracking-[-0.16px] text-[#131314]'>
                                Cổng thông tin tự phục vụ (self-service)
                            </h1>
                            <div className='mt-2'>
                                <span className='text-[20px] leading-[25px] tracking-[-0.05px] text-[#646466]'>
                                    Cổng thông tin cho phép khách hàng chủ động thực hiện các thao tác mà không cần liên hệ tư vấn viên.
                                </span>
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
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src={"/ai-ce_pic-3.png"}
                                alt='Digital_Picture'
                                width={482}
                                height={540}
                                className="float-right rounded-s-3xl"
                            />
                        </div>
                    </div>

                    {/* nội dung 4 */}
                    <div className="shadow grid grid-cols-1 grid-flow-col rounded-3xl mt-[120px]">
                        <div className='grid grid-rows-1 px-[80px] py-[101]'>
                            <h1 className='text-[32px] font-[500] leading-[38px] tracking-[-0.16px] text-[#131314]'>
                                Hệ thống Live Support
                            </h1>
                            <div className='mt-2'>
                                <span className='text-[20px] leading-[25px] leading-[25px] tracking-[-0.05px] text-[#646466]'>
                                    Hệ thống hỗ trợ trực tuyến (live support) cho phép hợp nhất các kênh chăm sóc khách hàng trên một nền tảng quản lý.
                                </span>
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
                        {/* Ảnh */}
                        <div dir="rtl">
                            <Image
                                src={"/ai-ce_pic-4.png"}
                                width={482}
                                height={540}
                                alt='Digital_Picture'
                                className="float-right rounded-s-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}
            <div className='bg-black' style={{ padding: '120px 142px' }}>
                <div className="flex flex-col justify-center items-center mb-20">
                    <h3 className="text-[48px] text-white font-semibold">Ứng dụng các công nghệ AI tiên tiến </h3>
                </div>
                <div className="mt-5">
                    <div className='grid grid-cols-3 gap-4 md:grid md:grid-rows'>
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