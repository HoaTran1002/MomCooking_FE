import React from 'react'
import { Link } from 'react-router-dom'
import { INews } from '../../../app/interface/news.interface'
const NewItem = ({ ...prop }: INews): JSX.Element => {
    return (
        <div>
            <Link to={'/NewsDetail/1'}>
                <div className='list-news-items'>
                    <div className='list-news-items-img'>
                        <img src={prop.imgUrl} loading='lazy' />
                    </div>
                    <div className="list-news-items-content">
                        <h2 className='title font-medium'>{prop.titleName}</h2>
                        <p className='time'>{prop.timePost}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default NewItem