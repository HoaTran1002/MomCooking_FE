import React from 'react'
import "./style.css"
import { IPropsSelectLanguage } from './select.interface'
import { languages } from './select.data'

const SelectLanguage = ():JSX.Element=>{
    const [languageChose,setLanguageChose] = React.useState<number>(0)
    const [openOptions,setOpenOptions]= React.useState<boolean>(false)
    
    const handleChangeLanguage=(index:number)=>{
        setLanguageChose(index)
        setOpenOptions(r=>!r)
    }
    const handleChoseLanguage = ():void=>{
        setOpenOptions(r=>!r)
    }
    return(
        <div className='box-language h-8' >
            <div className='box-language-show ' onClick={handleChoseLanguage}>
                <img src={languages[languageChose].img} className='box-language-img' alt={languages[languageChose].name} />
                <i className="ri-arrow-down-s-line box-language-icons"></i>
            </div>
            <div className={`box-language-options w-36 ${openOptions ?"show":""}`}>
                {
                    languages.map((r:IPropsSelectLanguage,index:number)=>(
                        <div 
                            key={index} 
                            className={`options-list-items ${languageChose === index ?"active":""}`} 
                            onClick={():void=>handleChangeLanguage(index)}
                        >
                            <img src={r.img} alt="" />
                            <span>{r.name}</span>   
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
export default SelectLanguage