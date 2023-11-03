import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = (): JSX.Element => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-7'>
            <div className='p-2 z-10 rounded-full bg-slate-500/10 inline-block relative'>
                <span className='inline-block bg-slate-500/20 rounded-full '>
                    <i className="ri-error-warning-line text-3xl w-14 h-14"></i>
                </span>
            </div>
            <div>
                <h2 className='text-4xl font-medium text-center'>PAGE NOT FOUND</h2>
            </div>
            <p className='text-center'>
                The page you are looking for doesn't exist.<br />
                Here are some helpful links:
            </p>
            <div>
                <Link to={'/'}>
                    <span className='inline-block bg-black text-white px-5 py-2 rounded-md'>
                    <i className="ri-arrow-left-line"></i>
                        Take me back home
                    </span>
                </Link>
            </div>
        </div>
    )
}
export default ErrorPage