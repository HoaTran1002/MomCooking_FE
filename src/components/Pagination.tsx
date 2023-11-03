import React from 'react'
const Pagination = ():JSX.Element=>{
    return(
        <div className='flex items-center justify-center'>
                            <ul className='flex gap-2 items-center text-2xl'>
                                <li><i className="ri-arrow-left-double-line"></i></li>
                                <li><i className="ri-arrow-left-s-line"></i></li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li><i className="ri-arrow-right-s-line"></i></li>
                                <li><i className="ri-arrow-right-double-line"></i></li>
                            </ul>
                        </div>
    )
}
export default Pagination