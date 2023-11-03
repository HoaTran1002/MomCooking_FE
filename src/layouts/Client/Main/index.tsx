// import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

interface IPropsMain{
    children:JSX.Element
}
const LayoutMain = ({...props}:IPropsMain):JSX.Element=>{

    return(
        <>
            <Header/>
                <div className='main-app'>
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}
export default LayoutMain