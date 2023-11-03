import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import dot from "../../../assets/images/dot_1.png"
import bread1 from "../../../assets/images/Courses/Bread/image_10.png"
import bread2 from "../../../assets/images/Courses/Bread/image_9.png"
import { product } from '../Courses/data'

import { Link } from 'react-router-dom'
import SliderCarousel from '../../../components/Carousel/SliderCarousel'
import { IProductsCourse } from '../../../app/Courses/courses.interface'
import ProductDetail from './ProductDetail'
const CoursesDetail = (): JSX.Element => {
    const [filterIndex, setFilterIndex] = React.useState<number>(0)
    const [open,setOpen] = React.useState<boolean>(false)
    const sessions = ["8AM - 11AM", "12:15PM  - 15:15PM", "15:30PM - 18:30PM", "18:45PM - 21:30PM"]
    const optionsFilter = ["Product made", "Chef", "More Information"]

    const handleOpenDetailProduct = (): void => {
        setOpen(true)
        console.log(1);
        
    }
    const handleCloseDetailProduct = (): void => {
        setOpen(false)
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <div >
                <div className='mt-32'>
                    <SliderCarousel autoplay={true} dots={false} autoplaySpeed={2000}>
                        {
                            product.map((r: IProductsCourse, index: number) => (
                                <div key={index}>
                                    <div className='carousel-slider-items'>
                                        <img loading="lazy" src={r.productImage} alt="" className='carousel-slider-items-img' />
                                    </div>
                                </div>
                            ))
                        }
                    </SliderCarousel>

                </div>
                <div className='container'>
                    <div className='flex flex-col gap-6 items-center justify-center pt-3'>
                        <h3 className='text-black text-3xl font-normal '>COURSES</h3>
                        <div className='text-2xl font-semibold'>
                            Khóa học làm bánh
                        </div>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime sint aspernatur,
                        </p>
                    </div>
                    <div className='flex items-center justify-center py-3'>
                        <button className='py-2 px-6 bg-black text-white font-semibold rounded-lg'>
                            <i className="ri-calendar-line mr-2"></i>
                            Đặt lịch ngay
                        </button>
                    </div>
                    <div className='grid max-sm:grid-cols-12 gap-6'>
                        {
                            product.map((r: IProductsCourse, index: number) => (
                                <div 
                                    key={index} 
                                    className='overflow-hidden bg-cover bg-no-repeat relative rounded-sm col-span-12 w-full' 
                                    style={{ backgroundImage: `url(${r.productImage})`, height: "400px" }} 
                                    onClick={handleOpenDetailProduct}
                                >
                                    <div className='before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:opacity-20'>
                                    </div>
                                    <div className='absolute left-3 bottom-3 text-white font-medium text-3xl'>
                                        {r.productName}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    open &&(
                        <ProductDetail
                            description='Học cách làm bánh kem ngon tuyệt vời trong khóa học này.'
                            name='Bánh kem việt quất phô mai'
                            image={'https://media.istockphoto.com/id/1466673520/photo/no-baked-blueberry-layered-cheesecake.webp?b=1&s=170667a&w=0&k=20&c=Fg6B34n3LnO-LELKOELk67D_Z812ylDdm1ev-wmxz3Q='}
                            onClose={handleCloseDetailProduct}
                        />
                    )
                }
            </div>
        </LayoutMain>
    )
}
export default CoursesDetail