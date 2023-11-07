import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { questions } from '../../../components/F_A_Q/data'
import { IPropsFAQuestion } from '../../../components/F_A_Q/FAQ.interface'
import FAQuestion from '../../../components/F_A_Q'
const FAQPage = ():JSX.Element=>{
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <LayoutMain>
            <div>
                <div className='h-80 w-full mt-32 relative'>
                <div className='absolute w-full h-80 bg-slate-950/20 flex items-center justify-center z-10 text-white uppercase text-2xl font-medium text-center'>
                        FAQS
                    </div>
                    <img src="https://media.istockphoto.com/id/1062137590/photo/wed-like-to-volunteer.webp?b=1&s=170667a&w=0&k=20&c=dl1rRVyRiPJ2v4qPqVzfksJAWFPw8jJmbDCoT0vb3V4=" className='h-full w-full object-cover' alt="" />
                </div>
                <h2 className='text-xl font-medium text-center py-3'>Các câu hỏi thường gặp?</h2>
                <div className='flex flex-col gap-4 container'>
                            {
                                questions.map((r: IPropsFAQuestion, index: number) => (
                                    <FAQuestion
                                        answer={r.answer}
                                        question={r.question}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
            </div>
        </LayoutMain>
    )
}
export default FAQPage