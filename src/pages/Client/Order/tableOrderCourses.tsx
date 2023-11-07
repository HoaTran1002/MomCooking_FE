import React from 'react'
import { IListTableCourses } from '../../../app/interface/order.interface'
interface IPropsTable {
    listItem: IListTableCourses[],
    isOrder?:boolean
}
const TableOrderCourses = ({listItem,isOrder = false}:IPropsTable): JSX.Element => {
    const [clickedRows, setClickedRows] = React.useState(Array(listItem.length).fill(false));
    const total = listItem.reduce((acc, currentItem) => acc + currentItem.price, 0);
    const handleRowClick = (index: number) => {
        const updatedClickedRows = [...clickedRows];
        updatedClickedRows[index] = !updatedClickedRows[index];
        setClickedRows(updatedClickedRows);
    };



    return (
        !isOrder ? (
            <div>
                <table className="min-w-full border-collapse border border-solid border-slate-500 font-medium overflow-hidden">
                    <thead className=' border border-solid border-slate-500 rounded-tl-md rounded-tr-md'>
                        <tr className='bg-slate-700 text-white  '>
                            <th className='border border-solid border-slate-600 px-2 py-4'></th>
                            <th className='border border-solid border-slate-600 px-2 py-4'>STT</th>
                            <th className='border border-solid border-slate-600 px-2 py-4'>Tên Khóa Học</th>
                            <th className='border border-solid border-slate-600 px-2 py-4 w-20 '>Giá</th>
                        </tr>
                    </thead>
                    <tbody className=' border border-solid border-slate-500'>
                        {
                            listItem.map((r: IListTableCourses, index: number) => (
                                <tr className={`border transition-all duration-150 border-solid border-slate-600 px-2 py-4 border-b ${clickedRows[index] ? 'bg-slate-200' : 'bg-white '}`} onClick={() => handleRowClick(index)}>
                                    <td
                                        className='border border-solid border-slate-600 px-2 py-4 text-center  align-middle'
                                    >
                                        {
                                            clickedRows[index] ?(
                                                <i className="text-3xl text-slate-600 ri-checkbox-fill"></i>
                                                ):(
                                                    <i className="text-3xl text-slate-600 ri-checkbox-blank-line"></i>
                                            )
                                        }
                                    </td>
                                    <td className='text-center border border-solid border-slate-600 px-2 py-4  align-middle'>{index + 1}</td>
                                    <td className='border border-solid border-slate-600 px-2 py-4'>{r.name}</td>
                                    <td className='border border-solid border-slate-600 px-2 py-4 text-center  align-middle' >$ {r.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        ):(
            <div>
            <table className="min-w-full border-collapse border border-solid border-slate-500 font-medium overflow-hidden">
                <thead className=' border border-solid border-slate-500 rounded-tl-md rounded-tr-md'>
                    <tr className='bg-slate-700 text-white  '>
                        <th className='border border-solid border-slate-600 px-2 py-4'>STT</th>
                        <th className='border border-solid border-slate-600 px-2 py-4'>Tên Khóa Học</th>
                        <th className='border border-solid border-slate-600 px-2 py-4 w-20 '>Giá</th>
                    </tr>
                </thead>
                <tbody className=' border border-solid border-slate-500'>
                    {
                        listItem.map((r: IListTableCourses, index: number) => (
                            <tr className={`border transition-all duration-150 border-solid border-slate-600 px-2 py-4 border-b ${clickedRows[index] ? 'bg-slate-200' : 'bg-white '}`}>
                                
                                <td className='text-center border border-solid border-slate-600 px-2 py-4  align-middle'>{index + 1}</td>
                                <td className='border border-solid border-slate-600 px-2 py-4'>{r.name}</td>
                                <td className='border border-solid border-slate-600 px-2 py-4 text-center  align-middle' >$ {r.price}</td>
                            </tr>
                        ))
                    }
                        <tr>
                        <td colSpan={2} className='border border-solid border-slate-600 px-2 py-4 text-center'>Tổng cộng</td>
                        <td colSpan={1} className='border border-solid border-slate-600 px-2 py-4 text-center '>${total}</td>
                        </tr>
                </tbody>
            </table>
        </div>
        )
    )
}
export default TableOrderCourses