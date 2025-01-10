'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import PicApp from '@/public/ai-assistance-overview-3.png'

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
        <div className='bg-black grid grid-cols-2' style={{ padding: '80px 142px'}}>
            <div className='px-5'>
                <h1 className="text-[48px] text-white" style={{
                    fontFamily: 'Noto Sans',
                    fontWeight: '600',
                    lineHeight: '56px',
                    letterSpacing: '-1%'
                }}>
                    Dịch vụ khách hàng vượt trội
                </h1>
            </div>
            <div className="px-10">
                <span className="text-[24px] text-white" style={{
                    fontFamily: 'Noto Sans',
                    fontWeight: '500',
                    lineHeight: '32px',
                    letterSpacing: '-0.35%',
                    color: '#A0A0BD'
                }}>
                    Vượt qua giới hạn nguồn nhân lực, bứt phá chất lượng dịch vụ khách hàng thông qua ứng dụng công nghệ Trí tuệ nhân tạo
                </span>
            </div>
        </div>

        {/* section 3 */}
        <div className='bg-white' style={{ padding: '80px 120px'}}>

            {/* Nội dung  */}
            <div>   
                <div className="text-center flex flex-col">   
                    <span className="text-[48px] text-[#131314]" style={{
                        fontFamily: 'Noto Sans',
                        fontWeight: '600',
                        lineHeight: '56px',
                        letterSpacing: '-1%'
                    }}>
                        Cải tiến dịch vụ khách hàng
                    </span>
                    <span className="text-[48px] text-[#131314]" style={{
                        fontFamily: 'Noto Sans',
                        fontWeight: '600',
                        lineHeight: '56px',
                        letterSpacing: '-1%'
                    }}>
                        toàn diện cùng AI
                    </span>
                </div>
                <div className="text-center flex flex-col">   
                    <span className="text-[24px] text-[#646466]" style={{
                        fontFamily: 'Noto Sans',
                        fontWeight: '500',
                        lineHeight: '32px',
                        letterSpacing: '-0.35%',
                        color: '#A0A0BD'
                    }}>
                        Ứng dụng công nghệ AI giúp doanh nghiệp tự động hóa tác
                    </span>
                    <span className="text-[24px] text-[#646466]" style={{
                        fontFamily: 'Noto Sans',
                        fontWeight: '500',
                        lineHeight: '32px',
                        letterSpacing: '-0.35%',
                        color: '#A0A0BD'
                    }}>
                        vụ, giảm chi phí và cung cấp dịch vụ hỗ trợ 24/7 đa kênh.
                    </span>
                </div>
            </div>
        </div>

        <div className="bg-red p-10">
            <div className="flex flex-row" style={{ padding: '101px 80px'}}>
                {/* nội dung  */}
                <div className="">
                    
                </div>
    
                {/* Ảnh */}
                <div>
                        
                </div>
            </div>
        </div>

    </div>
  )
}

export default CustomerExperience