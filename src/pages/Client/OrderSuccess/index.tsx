import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { Link } from 'react-router-dom'
const OrderSuccess = (): JSX.Element => {
    return (
        <LayoutMain>
            <div className="container">
                <div className="mt-32 py-4">
                    <div>
                        <h2 className='text-3xl text-black font-normal text-center py-3'>THANH TOÁN THÀNH CÔNG</h2>
                    </div>
                    <div>
                        <p className='text-center'>
                            Cảm ơn bạn đã đăng ký lớp học của chúng tôi, thông tin chi tiết sẽ được hiển thị chi tiết trong công nợ tại đây <br/><br/>
                            <Link to={'/Debit'} className='text-white font-medium py-2 px-5 bg-black rounded'>Công nợ</Link>
                        </p>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}
export default OrderSuccess