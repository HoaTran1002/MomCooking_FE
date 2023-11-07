import React from 'react'
import { IPorpsLayoutAuth } from '../../app/interface/auth.interface'
import Logo from "../../assets/images/Logo/logo-mom-removebg-preview.png"
import bg_Auth from '../../assets/images/Views/z4689941080887_08a34fc53c3e1611e70000aecc659bbd.jpg'
const LayoutAuth = ({...prop}:IPorpsLayoutAuth):JSX.Element=>{
    return(
        <div className='fixed w-screen h-screen bg-cover bg-no-repeat' style={{backgroundImage:`url(${bg_Auth})`}}>
            <div className='rounded-md absolute max-sm:top-2/4 max-sm:left-2/4 max-sm:-translate-x-2/4 max-sm:-translate-y-2/4 bg-white p-3 w-5/6'>
                <div className='flex justify-center'>
                    <img src={Logo} alt="" className='h-16 w-16'/>
                </div>
                <div>
                    {prop.children}
                </div>
                
            </div>
        </div>
    )
}
export default LayoutAuth