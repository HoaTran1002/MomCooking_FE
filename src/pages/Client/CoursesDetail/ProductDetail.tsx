import React from 'react'
interface IPropsProductDetail {
    name: string,
    description: string,
    image:string,
    onClose: () => void
}
const ProductDetail = ({ ...props }: IPropsProductDetail): JSX.Element => {
    console.log('xin chào');

    return (
        <div>
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-950/40 z-20' onClick={props.onClose}>

            </div>
            <div className='fixed z-30 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 h-5/6 w-5/6 bg-white rounded'>
                <span className='absolute right-2 top-2 text-3xl' onClick={props.onClose}>
                    <i className="ri-close-line"></i>
                </span>
                <div className='px-2 py-1 mt-12 flex flex-col gap-3'>
                    <img src={props.image} className='w-full h-80 object-cover rounded' alt="" />
                    <h3 className='text-2xl text-center font-medium'>{props.name}</h3>
                </div>
            </div>

        </div>
    )
}
export default ProductDetail
