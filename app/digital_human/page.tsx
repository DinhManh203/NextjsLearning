'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import PicDigital from '@/public/digital-human.png'
import Diversity3 from '@/public/diversity_3.svg'
import Diversity1 from '@/public/diversity_1.svg'
import ModelTraining from '@/public/model_training.svg'
import WifiIcon from '@/public/nest_remote_comfort_sensor.svg'
import MarkChat from '@/public/mark_chat_unread.svg'
import Graphy from '@/public/demography.svg'
import Instruction from '@/public/integration_instructions.svg'
import DesktopCloud from '@/public/desktop_cloud_stack.svg'

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
          src={PicDigital}
          alt="Digital Photo"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>

      {/* secion 3 */}
      <div style={{ padding: '120px 142px' }}>
        <div className="flex flex-col justify-center items-center mb-20 pt-10">
          <h3 className="text-[64px] font-noto-sans font-semibold">Tổng quan</h3>
          <span className="text-[28px] font-noto-sans font-medium text-gray-600">
            Xây dựng đội ngũ năng lực số là nền tảng chuyển đổi số,
          </span>
          <span className="text-[28px] font-noto-sans font-medium text-gray-600">
            với nhân viên đóng vai trò then chốt, tham gia trực tiếp vào
          </span>
          <span className="text-[28px] font-noto-sans font-medium text-gray-600">
            quá trình này
          </span>
        </div>

        <div className='bg-white'>
          <div className='grid grid-cols-3 gap-3 grid-flow-row' style={{ paddingLeft: '35px', paddingRight: '35px' }}>

            <div className='items-center ' style={{ marginRight: '24px', }}>
              <div className='flex flex-col shadow ' style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '40px', height: '277px', letterSpacing: '-0.25%', lineHeight: '25px' }}>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={Diversity3}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='' style={{ marginTop: '24px' }}>
                  <span
                    className="text-[20px] font-[Noto Sans]"
                    style={{ fontWeight: '500' }}
                  >
                    Xây dựng đội ngũ nhân lực số cần tập trung vào việc ươm mầm văn hóa số, đào tạo và khuyến khích sự gắn kết và đổi mới trong doanh nghiệp.
                  </span>

                </div>
              </div>
            </div>

            <div className='items-center ' style={{ marginRight: '24px', }}>
              <div className='flex flex-col shadow ' style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '40px', height: '277px', letterSpacing: '-0.25%', lineHeight: '25px' }}>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={ModelTraining}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='' style={{ marginTop: '24px' }}>
                  <span className='text-[20px] font-[Noto Sans]'
                    style={{ fontWeight: '500' }}>
                    Đào tạo năng lực số giúp đội ngũ nhân sự thích nghi với xu hướng mới và phục vụ chiến lược chuyển đổi số của doanh nghiệp.
                  </span>


                </div>
              </div>
            </div>

            <div className='items-center' style={{ marginRight: '24px' }}>
              <div className='flex flex-col shadow ' style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '40px', height: '277px', letterSpacing: '-0.25%', lineHeight: '25px' }}>

                {/* ảnh icon  */}
                <div>
                  <Image
                    src={Diversity1}
                    alt='Icon'
                    width={36}
                    height={40}
                  />
                </div>
                {/* nội dung  */}
                <div className='' style={{ marginTop: '24px' }}>
                  <span
                    className="text-[20px] font-medium font-[Noto Sans]"
                    style={{ fontWeight: '500' }}
                  >
                    Môi trường làm việc gắn kết, truyền cảm hứng sẽ thúc đẩy sự hợp tác, đổi mới, và khuyến khích nhân viên đóng góp tích cực cho tổ chức.
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div style={{ padding: '120px 142px' }}>
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="text-[64px] font-noto-sans font-semibold">Ứng dụng A.I xây dựng đội </h3>
          <h3 className="text-[64px] font-noto-sans font-semibold">ngũ nhân lực số toàn diện </h3>
        </div>
        <div className="flex flex-col items-center">
          {/* Tabs Header */}
          <div className="flex flex-col items-center mt-10">
            {/* Tabs Header */}
            <div className="flex gap-[18px]">
              <button
                className={`text-lg text-black hover:bg-black hover:text-white ${activeTab === 1 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(1)}
                style={{ borderRadius: '100px', fontFamily: 'Noto Sans', fontSize: '15px', fontWeight: '600', padding: '8px 24px' }}
              >
                Trợ lý ảo Văn Phòng
              </button>
              <button
                className={`text-lg text-black hover:bg-black hover:text-white ${activeTab === 2 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(2)}
                style={{ borderRadius: '100px', fontFamily: 'Noto Sans', fontSize: '15px', fontWeight: '600', padding: '8px 24px' }}
              >
                Phát triển năng lực nhân sự
              </button>
              <button
                className={`text-lg text-black hover:bg-black hover:text-white ${activeTab === 3 ? " text-black" : " text-black"}`}
                onClick={() => setActiveTab(3)}
                style={{ borderRadius: '100px', fontFamily: 'Noto Sans', fontSize: '15px', fontWeight: '600', padding: '8px 24px' }}
              >
                Quản Trị Tri Thức
              </button>
            </div>

            {/* Tabs Content */}
            <div className="mt-4">
              {activeTab === 1 &&
                <div>
                  Hello 1
                </div>
              }
              {activeTab === 2 &&
                <div>
                  Hello 2
                </div>
              }
              {activeTab === 3 &&
                <div>
                  Hello 3
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className='bg-black' style={{ padding: '120px 142px' }}>
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="text-[48px] text-white font-semibold">MediaX cung cấp giải pháp hàng </h3>
          <h3 className="text-[48px] text-white font-semibold">đầu về trải nghiệm khách hàng </h3>
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
                    src={WifiIcon}
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
                    src={MarkChat}
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
                    src={Graphy}
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
                    src={Instruction}
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
                    src={DesktopCloud}
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