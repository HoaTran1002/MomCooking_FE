import React from 'react'
import "./style.css"
import LogoImage from "../../../assets/images/Logo/logo-mom-removebg-preview.png"
import { Link, useLocation } from 'react-router-dom'

import SelectLanguage from '../../../components/Select/SelectLanguage'
import NavbarLeft from '../../../components/Navbar/NavbarLeft/NavbarLeft'
import { IPropsheader } from '../client.interface'
import userTest from "../../../assets/images/User/Usertest.png"
import { AllSettingHeader, settingsWhenLoginSuccess } from '../../../data/layouts'
import Divider from '../../../components/Divider'
const Header = (): JSX.Element => {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState<boolean>(false)
    const location = useLocation();


    const handleCloseNavbar = (): void => {
        setOpen(false)
    }
    const handleOpenNavbar = (): void => {
        setOpen(true)
    }
    React.useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header z-20'>
            <div className='contacts-header'>
                <div className='contacts-header-left'>
                    <div className='contacts-header-left-items'>
                        <i className="ri-customer-service-fill contacts icons"></i>
                        <span>+841212121212</span>
                    </div>
                    <div className='contacts-header-left-items'>
                        <i className="ri-mail-line contacts icons"></i>
                        <span>momvietnam@momvietnam.vn</span>
                    </div>
                </div>
                <div className='contacts contacts-header-right'>
                    <SelectLanguage />
                </div>
            </div>
            <div className='header-content' >
                <div className='container header-items' >
                    <div className='grid max-sm:grid-cols-3 w-screen'>
                        <div className='max-sm:col-span-2'>
                            <div className='flex ' style={{ gap: "50px" }}>
                                <Link
                                    to={'/'}
                                    className="logo-img-link"
                                >
                                    <img
                                        src={LogoImage}
                                        style={{
                                            height: "100%"
                                        }}
                                    />

                                </Link>
                                <div
                                    className='flex items-center max-sm:hidden'
                                >
                                    {/* <SearchInput topic='Courses' placeholder='Find course here ...' /> */}
                                </div>
                            </div>
                        </div>
                        <div className='max-sm:col-span-1'>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%"
                                }}
                                className='max-sm:justify-center justify-between'
                            >
                                <div
                                    className='max-sm:hidden'
                                    style={{
                                        alignItems: "center",
                                        gap: "30px"
                                    }}
                                >
                                    {
                                        AllSettingHeader.map((r: IPropsheader, index: number) => (
                                            <Link
                                                key={index}
                                                to={r.path}
                                                className={`header-title-name ${location.pathname === r.path ? 'active' : ''} ${scrolled || location.pathname === '/Courses' ? 'color-primary scrolled' : 'color-white'}`}

                                            >
                                                {r.name}
                                            </Link>
                                        ))
                                    }

                                </div>
                                <div
                                    className='max-sm:hidden'
                                    style={{
                                        alignItems: "center",
                                        gap: "10px"
                                    }}
                                >
                                    <button
                                        className={`btn-fill-white ${scrolled || location.pathname === '/Courses' ? "bg-color-primary color-white scrolled" : ""}`}
                                        style={{
                                            padding: "8px 20px",
                                            borderRadius: "50px",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "700",
                                        }}
                                    >
                                        Login
                                    </button>
                                    <button

                                        className={`btn-ghost-white ${scrolled || location.pathname === '/Courses' ? "bg-color-primary color-primary scrolled" : ""}`}
                                        style={{
                                            padding: "8px 20px",
                                            borderRadius: "50px",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: "700",
                                            borderColor: scrolled || location.pathname === '/Courses' ? "#99BA95" : "white"
                                        }}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div onClick={handleOpenNavbar}>
                                    <i className="ri-menu-line icons-navbar"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {
                open && (
                    <NavbarLeft open={open} close={handleCloseNavbar} >
                        <div>
                            <div className='navbar-controller flex'>
                                <div className='navbar-controller-box' onClick={handleCloseNavbar}>
                                    <i className="ri-arrow-left-s-line navbar-controller-icon"></i>
                                </div>
                                <div className='navbar-controller-box'>
                                    <Link to={'/Profile'}>
                                        <i className="ri-edit-fill navbar-controller-icon"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className='navbar-user'>
                                <div className='navbar-user-img'>
                                    <img src={userTest} alt="" />
                                </div>
                                <div className='navbar-user-info'>
                                    <h2 className='name'>Huỳnh Đăng Khoa</h2>
                                    <h2 className='email'>blkhoa17@gmail.com</h2>
                                </div>
                                {/* <div className='flex items-center justify-center '>
                            <button className='rounded-xl bg-red-200 font-medium text-red-600 px-4 py-1'>
                                Đăng Xuất 
                            </button>
                        </div> */}
                                <div className='flex items-center justify-center gap-3'>
                                    <Link to={'/Login'} className='rounded-xl bg-black font-medium text-white px-4 py-1'>
                                        Đăng Nhập
                                    </Link>
                                    <Link to={'/Register'} className='rounded-xl border border-black bg-white font-medium text-black px-4 py-1'>
                                        Đăng Nhập
                                    </Link>
                                </div>
                            </div>
                            <Divider />
                            <div className='navbar-settings'>
                                {
                                    AllSettingHeader.map((r: IPropsheader, index: number) => (
                                        <div key={index} className='navbar-settings-items'>
                                            <Link to={r.path} className='navbar-settings-items-link'>
                                                {r.icon}
                                                <span className='navbar-settings-items-name'>
                                                    {r.name}
                                                </span>
                                            </Link>
                                        </div>

                                    ))
                                }
                            </div>
                            <Divider />
                            <div className='navbar-settings'>
                                {
                                    settingsWhenLoginSuccess.map((r: IPropsheader, index: number) => (
                                        <div key={index} className='navbar-settings-items'>
                                            <Link to={r.path} className='navbar-settings-items-link'>
                                                {r.icon}
                                                <span className='navbar-settings-items-name'>
                                                    {r.name}
                                                </span>
                                            </Link>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </NavbarLeft>
                )
            }
        </div>
    )
}
export default Header