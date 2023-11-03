// import React from 'react'
import HeaderAdmin from "../Header/HeaderAdmin"
import FooterAdmin from "../Footer/FooterAdmin"

interface IPropsMainAdmin{
    children:JSX.Element
}
const LayoutMainAdmin = ({...props}:IPropsMainAdmin):JSX.Element=>{

    return(
        <>
            <HeaderAdmin/>
                <div className='main-app'>
                    {props.children}
                </div>
            <FooterAdmin/>
        </>
    )
}
export default LayoutMainAdmin