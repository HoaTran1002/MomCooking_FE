import React from 'react'
import { Link } from 'react-router-dom'
interface PropsCoursesItemCard{
    name:string,
    description:string,
    imgUrl:string | undefined,
    link:string
}
const CoursesItemCard = ({...props}:PropsCoursesItemCard):JSX.Element=>{
    return(
        <div
            className='rounded-md overflow-hidden h-56 w-full relative bg-cover  '
            style={{
                backgroundImage:`url(${props.imgUrl})`
            }}
        >
            <div className='before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:opacity-20'>
            </div>
            <div className='relative p-5'>
                <h3  className='text-white font-bold text-3xl'>{props.name}</h3>
                <p className='text-white py-3'>
                    {props.description}
                </p>
            </div>
            <div className='absolute right-2 bottom-2'>
                <Link to={props.link} className='text-white font-semibold text-lg'>
                    Watch now 
                    <i className="ri-arrow-right-s-line"></i>
                </Link>
            </div>
        </div>
    )
}
export default CoursesItemCard