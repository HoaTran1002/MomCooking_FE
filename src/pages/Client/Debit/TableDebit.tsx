import React from 'react'
import { IDebit, IListItemDebit } from '../../../app/interface/debit.interface'
import Tag from '../../../components/Tag'
import Divider from '../../../components/Divider'
    interface IPropsTable {
        listItem: IDebit[]
    }
    const TableDebit = ({ ...prop }: IPropsTable): JSX.Element => {
        const [debits, setDebits] = React.useState<IDebit[] | undefined>([])
        React.useEffect(() => {
            setDebits(prop.listItem)
        }, [])
        console.log(debits);
        
        return (
            <>
                {
                    debits?.map((r: IDebit, index: number) => (
                        <div key={index} className=''>
                            <div className='flex flex-col gap-2 mb-1'>
                                <h2 className='text-lg'>
                                    MÃ HÓA ĐƠN: <span className='font-medium '>{r.id}</span> 
                                </h2>
                                <h2 className='text-lg'>
                                    NGÀY THANH TOÁN: 
                                    <span className='font-medium'>&nbsp;
                                        {r.dayPay.getDate()}/{r.dayPay.getMonth()}/{r.dayPay.getFullYear()} - {r.dayPay.getHours()}:{r.dayPay.getMinutes()}
                                    </span> 
                                </h2>
                            </div>
                            <div>
                                <table className="min-w-full border-collapse border border-solid border-slate-500 font-medium overflow-hidden">
                                    <thead className=' border border-solid border-slate-500 rounded-tl-md rounded-tr-md'>
                                        <tr className='bg-slate-700 text-white  '>
                                            <th className='border border-solid border-slate-600 px-2 py-4'>STT</th>
                                            <th className='border border-solid border-slate-600 px-2 py-4'>Tên Khóa Học</th>
                                            <th className='border border-solid border-slate-600 px-2 py-4 w-20 '>Giá</th>
                                            <th className='border border-solid border-slate-600 px-2 py-4 w-20 '>Công nợ</th>
                                        </tr>
                                    </thead>
                                    <tbody className=' border border-solid border-slate-500'>
                                        {
                                            r.listItem?.map((rl: IListItemDebit, i: number) => (
                                                <tr key={i} className={`border transition-all duration-150 border-solid border-slate-600 px-2 py-4 border-b bg-white `}>
                                                    <td className='text-center border border-solid border-slate-600 px-2 py-4  align-middle'>{i + 1}</td>
                                                    <td className='border border-solid border-slate-600 px-2 py-4'>{rl.name}</td>
                                                    <td className='border border-solid border-slate-600 px-2 py-4 text-center  align-middle' >$ {rl.priceDebit}</td>
                                                    <td className='border border-solid border-slate-600 px-2 py-4 text-center  align-middle' >$ {rl.priceDebitHasBeenPay}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td colSpan={2} className='border border-solid border-slate-600 px-2 py-4 text-center'>Tổng cộng</td>
                                            <td colSpan={1} className='border border-solid border-slate-600 px-2 py-4 text-center '>${r.sumDebit}</td>
                                            <td colSpan={1} className='border border-solid border-slate-600 px-2 py-4 text-center '>$ {r.sumDebitHasBeenPay}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className='border border-solid border-slate-600 px-2 py-4 text-center'>Tình trạng</td>
                                            <td colSpan={2} className='border border-solid border-slate-600 px-2 py-4 text-center '>
                                                <Tag
                                                    titleName={r.statusDebitName}
                                                    type={r.typeStatus}
                                                />
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <Divider/>
                        </div>
                    ))
                }
            </>
        )
    }
export default TableDebit