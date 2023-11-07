import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { newDetail } from './data'
import "./style.css"
import AnotherNews from '../News/NewItem'
import { news } from '../../../data/news'
import { INews } from '../../../app/interface/news.interface'
import NewItem from '../News/NewItem'
const NewsDetail = (): JSX.Element => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <LayoutMain>
            <>
                <div className="container">
                    <div className='flex f-column'>
                        <div className='news-detail'>
                            <div className='news-detail-img'>
                                <img src={newDetail.imgUrl} alt={newDetail.imgName} />
                            </div>
                            <div className="news-detail-info">
                                <h2 className='title'>
                                    {newDetail.title}
                                </h2>
                                <p className='author'>Tác giả: {newDetail.author}</p>
                                <p className='time'>Ngày đăng: {newDetail.timePost}</p>
                            </div>
                        </div>
                        {/* <Divider/> */}
                    </div>
                    <div className="news-detail-content">
                        <div className="content" dangerouslySetInnerHTML={{ __html: newDetail.content || '' }} />
                    </div>
                </div>
                <div className="container">
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
                </div>
            </>
        </LayoutMain>
    )
}
export default NewsDetail