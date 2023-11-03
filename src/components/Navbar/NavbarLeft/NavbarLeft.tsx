import React from 'react'
import "./style.css"
import { IPropsNavbarLeft } from '../navbar.interface'
import { Link } from 'react-router-dom'

const NavbarLeft = ({ ...props }: IPropsNavbarLeft): JSX.Element => {
    return (
        <>
            <div className="modal fixed z-30" >
                <div className="modal-fixed" onClick={props.close}>

                </div>
                <div className='navbar-left absolute h-screen overflow-y-scroll'>
                    {props.children}
                </div>
            </div>

        </>
    )
}
export default NavbarLeft