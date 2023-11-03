import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import "./style.css"
import slider_home_page_1 from "../../../assets/images/Slider/bg-slider-home-page.png"
import slider_home_page_2 from "../../../assets/images/Slider/bg-slider-home-page-1.png"
import ViewAround from "../../../assets/images/Views/a1.jpg"
import { Link } from 'react-router-dom'
import { INews } from '../../../app/News/news.interface';
import SimpleSlider from '../../../components/Carousel/SliderCarousel';
import NewsCard from '../../../components/Cards/NewsCard';
import { ICoursesCardReview } from '../../../app/Courses/courses.interface'
import { IMoments } from '../../../app/Moments/moments.interface'
import courses from '../Courses/data'
import { moments } from '../../../data/courses'
import { news } from '../../../data/news'
const Home = (): JSX.Element => {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <>
                <div className='mt-32 relative'>
                    <div className='absolute w-full h-80 bg-slate-950/20 flex items-center px-3 z-10 text-white uppercase text-2xl font-medium text-center'>
                        Mang nụ cười của những người mẹ sang khắp đất nước
                    </div>
                    <SimpleSlider autoplaySpeed={3000} autoplay={true}  dots={false}>
                        <div className=''>
                            <img loading="lazy" src={slider_home_page_2} alt="" className=' h-80 w-full object-cover' />
                        </div>
                            <div className=''>
                                <img loading="lazy" src={slider_home_page_1} alt="" className=' h-80 w-full object-cover' />
                            </div>
                    </SimpleSlider>
                </div>
                <SimpleSlider autoplay={true} autoplaySpeed={2300} slidesToShow={2} slidesToScroll={1}>
                    {
                        courses.map((r: ICoursesCardReview, index: number) => (
                            <div key={index} className='px-0.5' >
                                <div className='rounded-sm overflow-hidden relative '>
                                    <div className='absolute bg-slate-950/25 w-full h-full'>
                                    </div>
                                    <img loading="lazy" src={r.imgUrl} alt="" className='h-32 w-full object-cover' />
                                    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 '>
                                        <h2 className='text-white text-center text-xl font-medium' >{r.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </SimpleSlider>
                <div className="container">
                    <div className='grid max-sm:grid-cols-2 gap-3'>
                        <div className='flex flex-col items-center justify-center col-span-2 relative'>
                            <div className='bg-cover bg-no-repeat h-96 w-full' style={{backgroundImage:`url(${slider_home_page_1})`}}>

                            </div>
                            <div className='absolute w-full h-full bg-slate-950/30'>

                            </div>
                            <div className='flex flex-col absolute items-center justify-center gap-3 p-3' >
                                <h2 className="text-white text-2xl font-medium" >
                                    Lesson trial free
                                </h2>
                                <p className='text-gray-300 text-xl text-center'>
                                    Thử nghiệm với các bài tập thử miễn phí 
                                </p>
                                <Link to={'/'} className='inline-block px-3 py-1 bg-white rounded text-md font-medium'>
                                    Xem thêm 
                                    <i className="ri-arrow-right-line ml-2"></i>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center col-span-1 relative '>
                            <div className='bg-cover bg-no-repeat h-60 w-full' style={{backgroundImage:`url(${slider_home_page_1})`}}>

                            </div>
                            <div className='absolute w-full h-full bg-slate-950/30'>

                            </div>
                            <div className='flex flex-col absolute items-center justify-center gap-3 p-3' >
                                <h2 className="text-white text-2xl font-medium text-center" >
                                    Lesson private
                                </h2>
                                <p className='text-gray-300 text-xl text-center'>
                                    Bắt đầu vói các đầu bếp riêng
                                </p>
                                <Link to={'/'} className='inline-block px-3 py-1 bg-white rounded text-md font-medium'>
                                    Xem thêm 
                                    <i className="ri-arrow-right-line ml-2"></i>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center col-span-1 relative'>
                            <div className='bg-cover bg-no-repeat h-60 w-full' style={{backgroundImage:`url(${slider_home_page_1})`}}>

                            </div>
                            <div className='absolute w-full h-full bg-slate-950/30'>

                            </div>
                            <div className='flex flex-col absolute items-center justify-center gap-3 p-3' >
                                <h2 className="text-white text-2xl font-medium text-center" >
                                    Lesson online
                                </h2>
                                <p className='text-gray-300 text-xl text-center'>
                                    Học qua mạng với bài tập phổ thông
                                </p>
                                <Link to={'/'} className='inline-block px-3 py-1 bg-white rounded text-md font-medium'>
                                    Xem thêm 
                                    <i className="ri-arrow-right-line ml-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='component-content'>
                        <div className='slider-courses'  >
                            {/* {
                                products.map((r: ICourseProducts, index: number) => (
                                    <div className='w-40 h-96' key={index}>
                                        <div className='slider-courses-items products w-40 h-96'>
                                            <img loading="lazy" className='item-img w-40' src={r.urlLink} alt="" />
                                            <div className='item-content'>
                                                <h2 className='title' >{r.titleName}</h2>
                                                <h2 className="des" >
                                                    {r.courseName}
                                                </h2>
                                            </div>
                                            <div className='item-like'>
                                                <i className="ri-heart-line item-like-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            } */}
                        </div>
                    </div>
                    <div className="component-content">
                        <div className='title-link-more flex items-center'>
                            <h2 className=' text-2xl font-medium py-2'>
                                News
                            </h2>
                            <Link to={'/News'}>
                                <span className='font-medium'>See more</span>
                                <i className="ri-arrow-right-double-line"></i>
                            </Link>
                        </div>
                        <div className='grid sm:grid-cols-1 gap-6'>
                            {
                                news.map((r: INews, index: number) => (
                                    index === 0 &&(
                                        <NewsCard
                                            imgUrl={r.imgUrl}
                                            timePost={r.timePost}
                                            titleName={r.titleName}
                                            key={index}
                                        />
                                    )
                                ))
                            }
                        </div>
                    </div>


                </div>
                    <div className='component-content'>
                        <div className='title-link-more container flex items-center'>
                            <h2  className=' text-2xl font-medium py-2'>
                                Our moments
                            </h2>
                            <Link to={'/'}>
                                <span className='font-medium'>See more</span>
                                <i className="ri-arrow-right-double-line"></i>
                            </Link>
                        </div>
                        <SimpleSlider autoplay={true} autoplaySpeed={2500} dots={false}>
                            {
                                moments.map((r:IMoments,index:number)=>(
                                    <div key={index}>
                                        <div className='carousel-slider-items'>
                                            <img loading="lazy" src={r.imageUrl} alt="" className='carousel-slider-items-img' />
                                        </div>
                                    </div>
                                ))
                            }
                        </SimpleSlider>
                    </div>
                <div className="component-content">
                    <div className="container">
                        <h2 className=' text-2xl font-medium py-2'>
                            Subscribe us
                        </h2>
                    </div>
                    <div className="bg-sub" >
                        <div className="bg-sub-img" style={{ backgroundImage: `url(${ViewAround})` }}>

                        </div>
                        <div className="bg-sub-content">
                            <div className='flex flex-col gap-6'>
                                <h2 className='text-white font-semibold text-2xl text-center' >Theo dõi chúng tôi</h2>
                                <p className='text-white text-center text-gray-200' style={{ padding: "0 20px", fontWeight: "400", lineHeight: "26px" }}>
                                    Hãy cho chúng tôi biết email của bạn, chúng tôi sẽ cung cấp cho bạn những thông tin mới nhất về mom VietNam
                                </p>
                            </div>
                            <div className='flex items-center flex-col w-full' style={{ gap: "20px" }}>
                                <div className='input-subscribe text-xl'>
                                    <input type="email" placeholder='Enter your Email here' />
                                </div>
                                <button className='input-button'>Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full bg-black text-white uppercase text-2xl font-normal px-3 py-4 text-center'
                >
                    Mang nụ cười của những người mẹ sang khắp đất nước
                </div>
            </>
        </LayoutMain>

    )
}
export default Home