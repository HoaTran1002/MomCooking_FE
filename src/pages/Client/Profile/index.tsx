import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import userTest from "../../../assets/images/User/Usertest.png"
import CustomInput from '../../../components/Input/CustomInput'

const Profile = (): JSX.Element => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <div className='container mt-36'>
                <h2 className='font-medium text-black text-3xl'>
                    Thông tin cá nhân
                </h2>
                <hr className="border my-4" />
                <div className='navbar-user'>
                    <div className='navbar-user-img'>
                        <img src={userTest} alt="" />
                    </div>
                    <div className='navbar-user-info'>
                        <h2 className='name'>Huỳnh Đăng Khoa</h2>
                        <h2 className='email'>blkhoa17@gmail.com</h2>
                    </div>
                </div>
                <div className='my-3 flex flex-col gap-4'>
                    <CustomInput
                        labelName='Họ và tên'
                        icon={<i className="ri-user-line"></i>}
                        defaultValue='Huỳnh Đăng Khoa'
                    />
                    <CustomInput
                        type='email'
                        labelName='Email'
                        icon={<i className="ri-mail-line"></i>}
                        defaultValue='blkhoa17@gmail.com'
                        readOnly={true}
                    />
                    <CustomInput
                        labelName='Số điện thoại'
                        icon={<i className="ri-phone-line"></i>}
                        defaultValue='0123456789'
                    />
                    <CustomInput
                        labelName='Địa chỉ'
                        icon={<i className="ri-map-pin-line"></i>}
                        defaultValue='123 Nguyễn Văn A'
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <button className='rounded-xl bg-black font-medium text-white text-xl px-8  py-1'>
                        Lưu
                    </button>
                </div>
            </div>
        </LayoutMain>
    )
}
export default Profile