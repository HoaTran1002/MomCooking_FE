import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import SliderCarousel from '../../../components/Carousel/SliderCarousel'
import { ICoursesCardReview } from '../../../app/interface/courses.interface'
import CoursesItemCard from '../Courses/CoursesItemCard'
import { courses } from '../../../data/courses'
const Lessons = ():JSX.Element=>{
    return(
        <LayoutMain>
            <>
                <div className='mt-32 relative'>
                    <div className='absolute w-full h-80 bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase text-xl font-normal text-center'>
                        gia nhập với các bài tập theo lựa chọn của bạn
                    </div>
                    <SliderCarousel autoplay={true} autoplaySpeed={2500} dots={false}>
                        {
                            courses.map((r: ICoursesCardReview, index: number) => (
                                <div key={index}>
                                    <div className='carousel-slider-items h-80'>
                                        <img loading="lazy" src={r.imgUrl} alt="" className='carousel-slider-items-img' />
                                    </div>
                                </div>
                            ))
                        }
                    </SliderCarousel>
                </div>
                <div className='container'>
                    <div className='flex flex-col gap-6 items-center justify-center pt-3'>
                        <h3 className='text-black text-3xl font-normal '>LESSONS</h3>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime sint aspernatur,
                        </p>
                    </div>
                    <div className='flex flex-col gap-5 mt-9'>
                        {
                            courses.map((r: ICoursesCardReview, index: number) => (
                                <CoursesItemCard
                                    key={index}
                                    imgUrl={r.imgUrl}
                                    name={r.title}
                                    description={r.title}
                                    link={r.path}
                                />
                            ))
                        }
                    </div>
                    
                </div>
            </>
        </LayoutMain>
    )
}
export default Lessons