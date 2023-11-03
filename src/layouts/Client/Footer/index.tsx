// import React from 'react'
import Logo from "../../../assets/images/Logo/logo-mom.jpg"
import facebook from "../../../assets/images/Socials/facebook.png"
import youtube from "../../../assets/images/Socials/youtube.png"
import instagram from "../../../assets/images/Socials/instagram.png"
import twitter from "../../../assets/images/Socials/twitter.png"
import "./style.css"
import { Link } from 'react-router-dom'
import { IPropsFooterItem, ItemsFooter } from "../client.interface"
import { FooterItems } from "../../../data/layouts"
const Footer = (): JSX.Element => {
    return (
        <>
            <div
                className='footer'
                style={{
                    padding: "50px 0"
                }}
            >
                <div className="container">
                    <div className='grid sm:grid-col-1'>
                        <div>
                            <div
                                className='flex f-column content-center'
                                style={{gap:"20px"}}
                            >
                                <a href={'#'} className='f-center'>
                                    <div style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "10px",
                                        overflow: "hidden"
                                    }}>
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%"
                                            }}
                                            src={Logo}
                                            loading='lazy'
                                            alt=""
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div  style={{marginTop:"20px"}}>
                            <div className='grid max-sm:grid-cols-2 gap-5' >
                                {
                                    FooterItems.map((r:IPropsFooterItem,index:number)=>(
                                        <div key={index}>
                                            <ul
                                                className='footer-list'
                                            >
                                                <li className='footer-list-item title'>
                                                    {r.name}
                                                </li>
                                                {
                                                    r.children.map((item:ItemsFooter,i:number)=>(
                                                        <li className='footer-list-item ' key={i}>
                                                            <Link to={item.path} className='footer-list-item-link text-base  font-medium'>{item.nameTitle}</Link>
                                                        </li>
                                                    ))
                                                }
                                                
                                            </ul>
                                        </div>
                                    ))
                                }
                                <div  >
                                    <ul
                                        className='footer-list'
                                    >
                                        <li className='footer-list-item title'>
                                            Socials
                                        </li>
                                        <li className='footer-list-item flex gap-3 flex-wrap'>
                                            <a href="#" className='socials-item'>
                                                <img 
                                                    className='socials-item-icon' 
                                                    src={facebook} 
                                                    alt="facebook" 
                                                />
                                            </a>
                                            <a href="#" className='socials-item'>
                                                <img 
                                                    className='socials-item-icon' 
                                                    src={instagram} 
                                                    alt="instagram" 
                                                />
                                            </a>
                                            <a href="#" className='socials-item'>
                                                <img 
                                                    className='socials-item-icon' 
                                                    src={twitter} 
                                                    alt="twitter" 
                                                />
                                            </a>
                                            <a href="#" className='socials-item'>
                                                <img 
                                                    className='socials-item-icon' 
                                                    src={youtube} 
                                                    alt="youtube" 
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className='flex flex-col text-white justify-start items-center'>
                                <div className='flex items-center '>
                                <i className="ri-phone-fill"></i>
                                <h2 style={{margin:0,color:"white",paddingLeft:"10px"}} > +8421231232</h2>
                                </div>
                                <div  className='flex items-center '>
                                    <i className="ri-map-pin-line"></i>
                                    <h2 style={{margin:0,color:"white",paddingLeft:"10px"}} >123 Nguyen Van A, Q1</h2>
                                </div>
                                <div  className='flex items-center '>
                                    <i className="ri-mail-line"></i>
                                    <h2 style={{margin:0,color:"white",paddingLeft:"10px"}} >nguyenvana@gmail.com</h2>
                                </div>
                            </div>
                        
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <div className='flex'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.95767753746907!2d106.68398696398052!3d10.7865669572312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2c5b2c6623%3A0xa4d25d0b0dae8748!2zMTQ4LzEwIEzDvSBDaMOtbmggVGjhuq9uZywgUGjGsOG7nW5nIDE0LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1695823542768!5m2!1svi!2s" style={{border:0}} className='map-review'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='coppy-right'>
                <span className='first'>Make with ❤️ by team KAIT </span>
                <span className='second'> © copyright 2023 KAIT web developer</span>
            </div>
        </>
    )
}
export default Footer