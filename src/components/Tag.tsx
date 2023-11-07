import React from 'react'
interface ITag{
    titleName:string
    type:'error' | 'success' | 'warning' | 'info'
}
const Tag = ({...props}:ITag):JSX.Element=>{
    return(
        <div className={`
            py-1 px-3 rounded-xl text-sm ${props.type === 'error' ? ' text-red-600 bg-red-200 ' :
            props.type === 'success' ?'text-green-700 bg-green-200' : 
            props.type === 'warning' ? 'text-yellow-600 bg-yellow-200':
            'text-blue-600 bg-blue-200'
            }
        `}>
            {props.titleName}
        </div>
    )
}
export default Tag