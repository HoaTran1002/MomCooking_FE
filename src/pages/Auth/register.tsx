import React from 'react'
import LayoutAuth from '../../layouts/Auth/layout'
import CustomInput from '../../components/Input/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
const Register = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <LayoutAuth >
            <>
                <span className='absolute p-2 top-2 left-2' onClick={(): void => { navigate(-1) }}>
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                </span>
                <h2 className='text-2xl text-center font-no p-2'>
                    ĐĂNG KÝ TÀI KHOẢN
                </h2>
                <div className='flex flex-col gap-1 px-3 mt-4'>
                    <CustomInput
                        labelName='Họ và tên'
                        placeholder='Nhập họ và tên '
                        icon={<i className="ri-user-line"></i>}
                    />
                    <CustomInput
                        labelName='Email'
                        placeholder='Nhập email'
                        type='email'
                        icon={<i className="ri-mail-line"></i>}
                    />
                    <CustomInput
                        labelName='Số điện thoại'
                        placeholder='Nhập số điện thoại'
                        icon={<i className="ri-phone-line"></i>}
                    />
                    <CustomInput
                        labelName='Mật khẩu'
                        placeholder='Nhập mật khẩu'
                        type='password'
                        icon={<i className="ri-key-2-line"></i>}
                    />
                    <CustomInput
                        labelName='Nhập lại mật khẩu'
                        placeholder='Nhập lại mật khẩu'
                        type='password'
                        icon={<i className="ri-key-2-line"></i>}
                    />
                </div>
                <div className='mt-3 flex flex-col justify-center items-center gap-3'>
                    <button className='w-full py-1 text-lg bg-black text-white rounded-md text-center'>
                        ĐĂNG KÝ
                    </button>
                    <span className='italic text-sm '>
                        Bạn có sẵn tài khoản,
                        <Link to={'/Login'}>
                            <span className='font-medium not-italic'>
                                Đăng Nhập ngay
                            </span>
                        </Link>
                    </span>
                    
                </div>
            </>
        </LayoutAuth>
    )
}
export default Register