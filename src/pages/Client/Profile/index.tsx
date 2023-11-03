import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import userTest from "../../../assets/images/User/Usertest.png"

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
                    <div>
                        <h3 className='font-medium'>Họ và tên</h3>
                        <input type="text" className='border border-black rounded-lg py-1 px-3 w-full' placeholder='Họ và tên ' value={'Huỳnh Đăng Khoa'} />
                    </div>
                    <div>
                        <h3 className='font-medium'>Gmail</h3>
                        <input type="text" className='border border-black rounded-lg py-1 px-3 w-full' placeholder='Họ và tên ' value={'blkhoa17@gmail.com'} readOnly />
                    </div>
                    <div>
                        <h3 className='font-medium'>Số điện thoại</h3>
                        <input type="text" className='border border-black rounded-lg py-1 px-3 w-full' placeholder='Số điện thoại' value={'0123456789'} />
                    </div>
                    <div>
                        <h3 className='font-medium'>Địa chỉ </h3>
                        <input type="text" className='border border-black rounded-lg py-1 px-3 w-full' placeholder='Số điện thoại' value={'Hồ Chí Minh'} />
                    </div>
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