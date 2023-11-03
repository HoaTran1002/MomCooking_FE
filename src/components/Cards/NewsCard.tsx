import React from 'react'
import { Link } from 'react-router-dom'
import { INews } from '../../app/News/news.interface'

const NewsCard = ({...prop}:INews):JSX.Element=>{
    return(
        <div>
            <Link to={'/NewsDetail/1'}>
                <div className='shadow-md overflow-hidden rounded-sm'>
                    <div
                        className='w-full h-64 bg-no-repeat bg-cover'
                        style={{
                            backgroundImage: `url(${prop.imgUrl})`
                        }}
                    >
                    </div>
                    <div className='content-news-info'>
                        <h2 className='text-lg font-medium' >{prop.titleName}</h2>
                        <p className='text-slate-500 text-base font-medium'>{prop.timePost}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default NewsCard