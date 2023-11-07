import React from 'react'
import LayoutAuth from '../../layouts/Auth/layout'
import CustomInput from '../../components/Input/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
const Login = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <LayoutAuth >
            <>
                <span className='absolute p-2 top-2 left-2' onClick={(): void => { navigate(-1) }}>
                    <i className="ri-arrow-left-s-line text-2xl"></i>
                </span>
                <h2 className='text-2xl text-center font-no p-2'>
                    ĐĂNG NHẬP TÀI KHOẢN
                </h2>
                <div className='flex flex-col gap-1 px-3 mt-4'>
                    <CustomInput
                        labelName='Email'
                        placeholder='Nhập email'
                        type='email'
                        icon={<i className="ri-mail-line"></i>}
                    />
                    <CustomInput
                        labelName='Mật khẩu'
                        placeholder='Nhập mật khẩu'
                        type='password'
                        icon={<i className="ri-key-2-line"></i>}
                    />
                </div>
                <div className='mt-3 flex flex-col justify-center items-center gap-2'>
                    <button className='w-full py-1 text-lg bg-black text-white rounded-md text-center'>
                        ĐĂNG NHẬP
                    </button>
                    <span className='italic text-sm '>
                        Bạn chưa có tài khoản,
                        <Link to={'/Register'}>
                            <span className='font-medium not-italic'>
                                Đăng ký ngay
                            </span>
                        </Link>
                    </span>
                    <span className='italic text-sm '>
                        Quên mật khẩu? 
                        <Link to={'/Login'}>
                            <span className='font-medium not-italic'>
                                &nbsp;
                                nhấn để lấy lại mật khẩu
                            </span>
                        </Link>
                    </span>
                </div>
            </>
        </LayoutAuth>
    )
}
export default Login