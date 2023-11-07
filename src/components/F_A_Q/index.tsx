import React from 'react'
import { IPropsFAQuestion } from './FAQ.interface'

const FAQuestion = ({ ...props }: IPropsFAQuestion): JSX.Element => {
    const [show,setShow] = React.useState<boolean>(false)
    const handelShowQuestion = ():void=>{
        setShow(r=>!r)
    }
    return (
        <div className='py-3 px-4 rounded-2xl transition-all duration-500  border border-solid border-black' onClick={handelShowQuestion}>
            <div className=' flex items-center justify-between '>
                <span className='text-black text-xl font-bold'>
                    {props.answer}
                </span>
                <span className={`${show?'rotate-90 ':''} transition-all duration-500 ml-2`}>
                    <i className={`${show?'rotate-45 ri-arrow-drop-right-fill':'ri-arrow-drop-right-fill'} text-4xl`}></i>
                </span>
            </div>
            <div className={`transition-all duration-500 ${show ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden `}>
                <p className='p-2'>
                    {props.question}
                </p>
            </div>
        </div>
    )
}
export default FAQuestion