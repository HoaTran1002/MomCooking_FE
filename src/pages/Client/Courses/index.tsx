import React from 'react'
import ViewMoments from "../../../assets/images/Views/image_6.png"
import LayoutMain from '../../../layouts/Client/Main'
import slider_home_page_1 from "../../../assets/images/Slider/bg-slider-home-page.png"
import slider_home_page_2 from "../../../assets/images/Slider/bg-slider-home-page-1.png"
import SliderCarousel from '../../../components/Carousel/SliderCarousel'

import CoursesItemCard from './CoursesItemCard'
import { questions } from '../../../components/F_A_Q/data'
import FAQuestion from '../../../components/F_A_Q'
import { IPropsFAQuestion } from '../../../components/F_A_Q/FAQ.interface'
import { ICoursesCardReview } from '../../../app/interface/courses.interface'
import Divider from '../../../components/Divider'
import { courses } from '../../../data/courses'
const Courses = (): JSX.Element => {
    const [filterIndex, setFilterIndex] = React.useState<number>(0)
    const [current, setCurrent] = React.useState<number>(3);

    const handleChangeFilter = (index: number): void => {
        setFilterIndex(index)
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <>
                <div className='mt-32 relative'>
                    <div className='absolute w-full h-80 bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase text-xl font-normal text-center'>
                        chuyên nghiệp, nhiệt tình, thành công, hài lòng
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
                        <h3 className='text-black text-3xl font-normal '>COURSES</h3>
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
                    
                    <Divider/>
                    <div>
                        <h2 className='text-xl font-medium px-3 py-4'>
                            <i className="ri-arrow-right-s-fill"></i>
                            Các điều luật
                        </h2>
                        <div>
                            <ul className='ml-4 flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <i className="ri-circle-line text-xs"></i>
                                    <span className='text-xl'>Luật 1</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <i className="ri-circle-line text-xs"></i>
                                    <span className='text-xl'>Luật 2</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <i className="ri-circle-line text-xs"></i>
                                    <span className='text-xl'>Luật 3</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Divider/>
                    <div >
                        <h2 className='text-xl font-medium px-3 py-4'>
                            <i className="ri-questionnaire-line mr-2"></i>
                            FAQ
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {
                                questions.map((r: IPropsFAQuestion, index: number) => (
                                    <FAQuestion
                                        answer={r.answer}
                                        question={r.question}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        </LayoutMain>
    )
}
export default Courses