'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const router = useRouter();

  const validCredentials = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value.trim();
    const password = e.currentTarget.password.value.trim();

    if (!navigator.onLine) {
      setNetworkError(true);
      setLoginError(false);
      setLoginSuccess(false);
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

    if (email === validCredentials.email && password === validCredentials.password) {
      setLoginError(false);
      setLoginSuccess(true);
      setTimeout(() => {
        router.push('/index');
      }, 2000);
    } else if (!formErrors.email && !formErrors.password) {
      setLoginError(true);
      setLoginSuccess(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-[780px] p-[40px] bg-white rounded-[16px] shadow-lg">
        {networkError && (
          <div className="absolute top-0 bg-red-500 text-white px-[24px] py-[8px] flex justify-center w-full rounded-t-[16px] opacity-100">
            <Image
              src={'/Lilas/wifiOff.svg'}
              alt="Network Error Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="text-center">Lỗi kết nối mạng</span>
          </div>
        )}
        {loginError && (
          <div className="absolute top-12 bg-red-500 text-white px-[24px] py-[8px] flex justify-center w-full rounded-t-[16px] opacity-100">
            <Image
              src={'/Lilas/report.svg'}
              alt="Alert Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            <span className="text-center">Đăng nhập thất bại</span>
          </div>
        )}
        {loginSuccess && (
          <div className="absolute top-12 bg-green-500 text-white px-[24px] py-[8px] flex justify-center w-full rounded-t-[16px] opacity-100">
            <span className="text-center">Đăng nhập thành công</span>
          </div>
        )}

        <form className="grid grid-cols-5 gap-4" onSubmit={handleSubmit}>
          <div className="col-span-2">
            <Image src="/lilas/Lilas-logo.png" alt="Logo" width={217} height={28} />
            <h2 className="mt-[20px] text-[32px] font-medium">Đăng nhập</h2>
          </div>
          <div className="col-span-3 mt-[45px]">
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 font-sans text-[17px] font-semibold text-gray-900"
              >
                Tên tài khoản
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={`bg-[#f5f7fa] border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-full h-[40px] px-[8px]`}
                placeholder="Điền tên tài khoản"
                aria-invalid={!!errors.email}
              />
              <div className="h-[20px] mt-1">
                {errors.email && (
                  <p className="text-sm text-red-500 flex">
                    <Image
                      src={'/Lilas/400.svg'}
                      alt="Alert Icon"
                      width={16}
                      height={16}
                      className="text-center mr-2"
                    />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-[10px]">
              <label
                htmlFor="password"
                className="block mb-2 font-sans text-[17px] font-semibold text-gray-900"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className={`bg-[#f5f7fa] border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 rounded-lg focus:ring-[#C025F4] focus:border-[#C025F4] block w-full h-[40px] px-[8px]`}
                  placeholder="Điền mật khẩu"
                  aria-invalid={!!errors.password}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-[8px] top-[8px] text-gray-600"
                >
                  {showPassword ? <HiOutlineEyeSlash size={20} /> : <HiOutlineEye size={20} />}
                </button>
              </div>
              <div className="h-[20px] mt-1">
                {errors.password && (
                  <p className="text-sm text-red-500 flex">
                    <Image
                      src={'/Lilas/400.svg'}
                      alt="Alert Icon"
                      width={16}
                      height={16}
                      className="text-center mr-2"
                    />
                    {errors.password}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <Button />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
