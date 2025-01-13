'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const digital_human = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col justify-center items-center mb-20 pt-10">
        <h3 className="text-[64px] font-noto-sans font-semibold ">Đội ngũ nhân lực số</h3>
        <span className="text-[28px] font-noto-sans font-medium text-gray-600">
          Tối ưu sức mạnh hiệu suất nhờ kết hợp nguồn lực
        </span>
        <span className="text-[28px] font-noto-sans font-medium text-gray-600">
          con người và trí tuệ nhân tạo
        </span>
      </div>

      {/* section 2 */}
      <div className="relative w-full h-[638px]">
        <Image
          src={"/digital-human.png"}
          alt="Digital Photo"
          layout="fill"
          priority
          quality={100}
          className='object-cover'
        />
      </div>

      {/* secion 3 */}
      <div className='pl-[120px] pr-[142px]'>
        <div className="flex flex-col justify-center items-center mb-20 pt-10">
          <h3 className="text-[64px] font-semibold">Tổng quan</h3>
          <span className="text-[28px] font-medium text-gray-600">
            Xây dựng đội ngũ năng lực số là nền tảng chuyển đổi số,
          </span>
          <span className="text-[28px] font-medium text-gray-600">
            với nhân viên đóng vai trò then chốt, tham gia trực tiếp vào
          </span>
          <span className="text-[28px] font-medium text-gray-600">
            quá trình này
          </span>
        </div>

        <div className='bg-white'>
          <div className='grid grid-cols-3 gap-3 grid-flow-row px-[35px]'>

            <div className='items-center mr-[24px]'>
              <div className='flex flex-col shadow p-[40px] rounded-[40px] h-[277px] leading-[25px] bg-white'>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={"/diversity_3.svg"}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='mt-[24px]'>
                  <span
                    className="text-[20px] font-[500]"
                  >
                    Xây dựng đội ngũ nhân lực số cần tập trung vào việc ươm mầm văn hóa số, đào tạo và khuyến khích sự gắn kết và đổi mới trong doanh nghiệp.
                  </span>

                </div>
              </div>
            </div>

            <div className='items-center mr-[24px]'>
              <div className='flex flex-col shadow p-[40px] rounded-[40px] h-[277px] leading-[25px] bg-white'>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={"/model_training.svg"}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='mt-[24px]'>
                  <span className='text-[20px] font-[500]'>
                    Đào tạo năng lực số giúp đội ngũ nhân sự thích nghi với xu hướng mới và phục vụ chiến lược chuyển đổi số của doanh nghiệp.
                  </span>
                </div>
              </div>
            </div>

            <div className='items-center mr-[24px]'>
              <div className='flex flex-col shadow p-[40px] rounded-[40px] h-[277px] leading-[25px] bg-white'>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={"/diversity_1.svg"}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='mt-[24px]'>
                  <span className="text-[20px] font-[500]">
                    Môi trường làm việc gắn kết, truyền cảm hứng sẽ thúc đẩy sự hợp tác, đổi mới, và khuyến khích nhân viên đóng góp tích cực cho tổ chức.
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className='px-[120px] py-[142px]'>
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="text-[64px] font-noto-sans font-semibold">Ứng dụng A.I xây dựng đội </h3>
          <h3 className="text-[64px] font-noto-sans font-semibold">ngũ nhân lực số toàn diện </h3>
        </div>
        <div className="flex flex-col items-center">
          {/* Tabs Header */}
          <div className="flex flex-col items-center">
            {/* Tabs Header */}
            <div className="flex gap-[18px]">
              <button
                className={`text-[15px] font-[600] rounded-[100px] px-[8px] py-[8px] text-black hover:bg-black hover:text-white ${activeTab === 1 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(1)}
              >
                Dịch vụ khách hàng
              </button>
              <button
                className={`text-[15px] font-[600] rounded-[100px] px-[8px] py-[8px] text-black hover:bg-black hover:text-white ${activeTab === 2 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(2)}
              >
                Quản trị trải nghiệm Khách Hàng
              </button>
              <button
                className={`text-[15px] font-[600] rounded-[100px] px-[8px] py-[8px] text-black hover:bg-black hover:text-white ${activeTab === 3 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(3)}
              >
                Chăm sóc khách hàng
              </button>
            </div>

            {/* Tabs Content */}
            <div className="">
              {activeTab === 1 &&

                <div className="shadow grid grid-rows-1 grid-flow-col rounded-3xl mt-[120px]">
                  {/* Ảnh */}
                  <div dir="ltr">
                    <Image
                      src={"/digi_pic-1.png"}
                      width={562}
                      height={532}
                      alt="Digital_Picture"
                      className="rounded-l-3xl object-fill"
                    />
                  </div>
                  <div className=" float-right px-[40px] py-[31px]">
                    <h1 className="text-[32px] font-[500] leading-[38px] tracking-[-0.16px] text-[#131314]">
                      Dịch vụ khách hàng vượt trội
                    </h1>
                    <div className="mt-2">
                      <span className="text-[20px] leading-[25px] tracking-[-0.05px] text-[#646466]">
                        Để đội ngũ trợ lý ảo AI xử lý các tác vụ lặp lại trong chăm sóc khách hàng, giúp tối ưu hóa trung tâm dịch vụ khách hàng.
                      </span>
                    </div>

                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Chatbot AI trả lời các câu hỏi thường gặp (FAQ)
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Tra cứu thông tin sản phẩm dịch vụ
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Cổng thông tin tự phục vụ (self-service)
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Hệ thống Live Support
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Hỗ trợ khiếu nại tự động (auto-claim)
                        </span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                          Điều hướng cuộc gọi thông minh (Smart IVR)
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className='flex text-center'>
                        <a href="#" className="flex mr-[16px] px-[8px] py-[16px] w-[200px] j-[44px] justify-center items-center text-[15px] text-[#005FE3] border-[1px] border-[#005FE3] bg-[transparent] rounded-[100px]">
                          Tìm hiểu thêm
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.49984 5V6.66667H12.6582L4.6665 14.6583L5.8415 15.8333L13.8332 7.84167V15H15.4998V5H5.49984Z" fill="#279FFF" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              }
              {activeTab === 2 &&

                <div className="shadow grid grid-rows-1 grid-flow-col rounded-3xl mt-[120px]">
                  {/* Ảnh */}
                  <div dir="ltr">
                    <Image
                      src={"/digi_pic-2.png"}
                      width={562}
                      height={532}
                      alt="Digital_Picture"
                      className="rounded-l-3xl object-fill"
                    />
                  </div>
                  <div className=" float-right px-[40px] py-[31px]">
                    <h1 className="text-[32px] font-[500] leading-[38px] tracking-[-0.16px] text-[#131314]">
                      Quản lý trải nghiệm khách hàng
                    </h1>
                    <div className="mt-5">
                      <span className="text-[20px] leading-[25px] tracking-[-0.05px] text-[#646466]">
                      Phân tích chuyên sâu trên mọi nền tảng (tổng đài, website, mobile app, mạng xã hội)
                      </span>
                    </div>

                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Lắng nghe & phân tích toàn diện về hành vi khách hàng
                        </span>
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Phân tích năng lực tư vấn của đội ngũ CSKH
                        </span>
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Hệ thống báo cáo chuyên sâu
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className='flex text-center'>
                        <a href="#" className="flex mr-[16px] px-[8px] py-[16px] w-[200px] j-[44px] justify-center items-center text-[15px] text-[#005FE3] border-[1px] border-[#005FE3] bg-[transparent] rounded-[100px]">
                          Tìm hiểu thêm
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.49984 5V6.66667H12.6582L4.6665 14.6583L5.8415 15.8333L13.8332 7.84167V15H15.4998V5H5.49984Z" fill="#279FFF" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              }
              {activeTab === 3 &&

                <div className="shadow grid grid-rows-1 grid-flow-col rounded-3xl mt-[120px]">
                  {/* Ảnh */}
                  <div dir="ltr">
                    <Image
                      src={"/digi_pic-3.png"}
                      width={562}
                      height={532}
                      alt="Digital_Picture"
                      className="rounded-l-3xl object-fill"
                    />
                  </div>
                  <div className=" float-right px-[40px] py-[31px]">
                    <h1 className="text-[32px] font-[500] leading-[38px] tracking-[-0.16px] text-[#131314]">
                    Chăm sóc khách hàng chủ động
                    </h1>
                    <div className="mt-5">
                      <span className="text-[20px] leading-[25px] tracking-[-0.05px] text-[#646466]">
                      Tận dụng mọi cơ hội tương tác và chăm sóc khách hàng chủ động với AI
                      </span>
                    </div>

                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Khảo sát khách hàng tự động
                        </span>
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Khảo sát mức độ hài lòng của khách hàng (CSAT)
                        </span>
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Cuộc gọi chào đón khách hàng mới
                        </span>
                      </div>
                    </div>
                    <div className="mt-7">
                      <div className="flex items-center">
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <mask id="mask0_613_147904" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_613_147904)">
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="#131314" />
                            <path d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z" fill="black" fillOpacity="0.2" />
                          </g>
                        </svg>
                        <span className="text-[17px] font-[500] text-[#131314]">
                        Nhắc lịch hẹn, lịch thanh toán tự động
                        </span>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className='flex text-center'>
                        <a href="#" className="flex mr-[16px] px-[8px] py-[16px] w-[200px] j-[44px] justify-center items-center text-[15px] text-[#005FE3] border-[1px] border-[#005FE3] bg-[transparent] rounded-[100px]">
                          Tìm hiểu thêm
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5.49984 5V6.66667H12.6582L4.6665 14.6583L5.8415 15.8333L13.8332 7.84167V15H15.4998V5H5.49984Z" fill="#279FFF" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              }
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
              <div style={{
                height: '202px',
                padding: '40px',
                borderRadius: '40px',
                border: '2px solid #1F2634',
                background: '#171824',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* icon và chữ trong cùng một thẻ div */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Image
                    src={"/nest_remote_comfort_sensor.svg"}
                    alt='Icon'
                    width={48}
                    height={48}
                  />
                  <div className='mt-5'>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                      background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Tăng cường { }

                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      trải nghiệm nhân viên
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ô 2  */}
            <div className='col-span-2'>
              <div style={{
                height: '202px',
                padding: '40px',
                borderRadius: '40px',
                border: '2px solid #1F2634',
                background: '#171824',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* icon và chữ trong cùng một thẻ div */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Image
                    src={"/mark_chat_unread.svg"}
                    alt='Icon'
                    width={48}
                    height={48}
                  />
                  <div className='mt-5'>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                      background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Nâng cao năng lực { }

                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      của đội ngũ nhân viên doanh nghiệp thông qua phương thức đào tạo mới
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ô 3  */}
            <div className=''>
              <div style={{
                height: '202px',
                padding: '40px',
                borderRadius: '40px',
                border: '2px solid #1F2634',
                background: '#171824',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* icon và chữ trong cùng một thẻ div */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Image
                    src={"/demography.svg"}
                    alt='Icon'
                    width={48}
                    height={48}
                  />
                  <div className='mt-5'>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                      background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Dễ dàng triển khai  { }

                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      và tích hợp với các hệ thống quản lý nội bộ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ô 4  */}
            <div className=''>
              <div style={{
                height: '202px',
                padding: '40px',
                borderRadius: '40px',
                border: '2px solid #1F2634',
                background: '#171824',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* icon và chữ trong cùng một thẻ div */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Image
                    src={"/integration_instructions.svg"}
                    alt='Icon'
                    width={48}
                    height={48}
                  />
                  <div className='mt-5'>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                      background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Tự động hóa { }

                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      các tác vụ quản lý nhân sự lặp đi lặp lại
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ô 5  */}
            <div className=''>
              <div style={{
                height: '202px',
                padding: '40px',
                borderRadius: '40px',
                border: '2px solid #1F2634',
                background: '#171824',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* icon và chữ trong cùng một thẻ div */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Image
                    src={"/desktop_cloud_stack.svg"}
                    alt='Icon'
                    width={48}
                    height={48}
                  />
                  <div className='mt-5'>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      Nền tảng { }
                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                      background: 'linear-gradient(to right, rgba(255, 165, 51, 1), rgba(255, 64, 73, 1), rgba(26, 140, 255, 1), rgba(199, 89, 221, 1), rgba(255, 64, 73, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      quản lý tập trung { }

                    </span>
                    <span className='text-white' style={{
                      fontSize: '20px',
                      fontWeight: 500,
                      fontFamily: "Noto Sans",
                    }}>
                      toàn bộ tri thức doanh nghiệp
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

export default digital_human