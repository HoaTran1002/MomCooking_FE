import React from 'react'
import { IPropsFAQuestion } from './FAQ.interface'

const FAQuestion = ({ ...props }: IPropsFAQuestion): JSX.Element => {
    const [show,setShow] = React.useState<boolean>(false)
    const handelShowQuestion = ():void=>{
        setShow(r=>!r)
    }
    return (
        <div className='py-3 px-4 rounded-2xl border border-solid border-black' onClick={handelShowQuestion}>
            <div className=' flex items-center justify-between'>
                <span className='text-black text-xl font-bold'>
                    {props.answer}
                </span>
                <span  className='ml-2'>
                    <i className={`${show?'ri-arrow-drop-down-fill':'ri-arrow-drop-right-fill'} text-4xl`}></i>
                </span>
            </div>
            <div className={`${show?'':'hidden'}`}>
            
                <p className='p-2'>
                    {props.question}
                </p>
            </div>

        </div>
    )
}
export default FAQuestion