import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import views1 from "../../../assets/images/Views/image_6.png"
import "./style.css"
import { achievements,steps } from './data'
import { IAboutAchievement, IAboutStep } from './interface'
const AboutUs = ():JSX.Element=>{
    return(
        <LayoutMain>
            <>
                <div className='about-bg-img'>
                    <img src={views1} alt="" />
                </div>
                <div className="container">
                    <div className='about-info'>
                        <h2 className='name'>
                            ABOUT US
                        </h2>
                        <p className='slogan'>
                            Món ngon mẹ làm, ngon như mẹ làm
                        </p>
                    </div>
                    <div className='about-content'>
                        <h2 >
                            Our Story
                        </h2>
                        <p className="about-our-story-content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum enim ullam beatae facere minima itaque, ducimus tempore molestiae officiis perferendis quam ipsa fugit quidem voluptas similique doloremque cum necessitatibus odio!
                        </p>
                        <p className="about-our-story-content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum enim ullam beatae facere minima itaque, ducimus tempore molestiae officiis perferendis quam ipsa fugit quidem voluptas similique doloremque cum necessitatibus odio!
                        </p>
                        <p className="about-our-story-content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum enim ullam beatae facere minima itaque, ducimus tempore molestiae officiis perferendis quam ipsa fugit quidem voluptas similique doloremque cum necessitatibus odio!
                        </p>
                    </div>
                    <div className="about-content">
                        <h2 >
                            Mom cooking achievement
                        </h2>
                        <div className='achievement-list'>
                            {
                                achievements.map((r:IAboutAchievement,index:number)=>(
                                    <div key={index} className="achievement-items">
                                        <h2 className='name'>
                                            <span className='line'> </span>{r.name}
                                        </h2>
                                        <ul className='achievement-items-list'>
                                            <li className=''>Thành tựu 1</li>
                                            <li>Thành tựu 1</li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 >
                            Why chose us
                        </h2>
                        <div className="about-step">
                            {
                                steps.map((r:IAboutStep,index:number)=>(
                                    <div key={index} className="about-step-items">
                                        
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        </LayoutMain>
    )
}
export default AboutUs