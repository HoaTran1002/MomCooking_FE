import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { newDetail } from './data'
import "./style.css"
import AnotherNews from '../News/NewItem'
const NewsDetail = ():JSX.Element=>{
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
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
                        <div className="content" dangerouslySetInnerHTML={{ __html: newDetail.content || '' }}/>
                    </div>
                </div>
                <AnotherNews/>
            </>
        </LayoutMain>
    )
}
export default NewsDetail