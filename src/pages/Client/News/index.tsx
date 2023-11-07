import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import "./style.css"
import news1 from "../../../assets/images/News/news1.jpg"
import { Link } from 'react-router-dom'
import slider_home_page_1 from "../../../assets/images/Slider/bg-slider-home-page.png"
import slider_home_page_2 from "../../../assets/images/Slider/bg-slider-home-page-1.png"
import { INews } from '../../../app/interface/news.interface'
import AnotherNews from './NewItem'
import Slider from 'react-slick'
import SliderCarousel from '../../../components/Carousel/SliderCarousel'
import NewsCard from '../../../components/Cards/NewsCard'
import Divider from '../../../components/Divider'
import NewItem from './NewItem'
import Pagination from '../../../components/Pagination'
import { news } from '../../../data/news'
const News = (): JSX.Element => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <>
                <div className='mt-32 relative'>
                    <div className='absolute w-full h-72 bg-slate-950/20 flex items-center justify-center z-10 text-white uppercase text-2xl font-medium text-center'>
                        NEWS
                    </div>
                    <SliderCarousel dots={false} autoplay={true} autoplaySpeed={2000}>
                        {
                            news.map((r: INews, index: number) => (
                                <div key={index} >
                                    <img src={r.imgUrl} className='object-cover h-72 w-full' />
                                </div>
                            ))
                        }
                    </SliderCarousel>
                </div>
                <div className="component-content">
                    <div className="container">
                        <h2 className='font-medium text-2xl py-2'>
                            Lastest news
                        </h2>
                        <NewsCard
                            titleName='Cuộc thi mới nhất ngay tại trung tâm của chúng tôi'
                            imgUrl={news1}
                            timePost='24 Jan 2023 - 1 second ago'
                        />
                        <Divider />
                    </div>
                    <div className="container">
                        <Pagination/>
                        <h2 className='font-medium text-2xl py-2'>
                            Another news
                        </h2>
                        <div className='list-news grid sm:grid-cols-1 gap-3 mb-4' >
                            {
                                news.map((r: INews, index: number) => (
                                    <NewItem
                                        key={index}
                                        imgUrl={r.imgUrl}
                                        timePost={r.timePost}
                                        titleName={r.titleName}
                                    />

                                ))
                            }
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </>
        </LayoutMain>
    )
}
export default News