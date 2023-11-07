import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { listSchedule } from '../../../data/schedule'
import { ISchedule, IScheduleTime } from '../../../app/interface/schedule.interface'
import Divider from '../../../components/Divider'
const Schedule = (): JSX.Element => {
    return (
        <LayoutMain>
            <div className='mt-32 container'>
                <div>
                    <h2 className='text-3xl text-black font-normal text-center py-3'>LỊCH HỌC</h2>
                </div>
                <div className='mt-5'>
                    <div className='grid max-sm:grid-cols-12 gap-3'>
                        {
                            listSchedule.map((r: ISchedule, index: number) => (
                                <>
                                    <div key={index} className='max-sm:col-span-12 rounded-md p-3 border border-solid border-black'>
                                        <h2 className='text-lg font-medium'>{r.nameSchedule}</h2>
                                        <h2>Đầu bếp dạy: {r.classLeader}</h2>
                                        <h2 className='flex items-center gap-2'>
                                            <span>Tình trạng:</span>
                                            <span className='flex gap-2 items-center'>
                                                <span className="relative flex h-2 w-2">
                                                    <span className={`h-2 w-2 absolute opacity-75 inline-flex rounded-full ${r.statusType === 'inProcess' ?
                                                        "bg-green-600 animate-ping" : r.statusType === 'hasDone' ?
                                                            "bg-gray-500" : "bg-red-500"}`}>
                                                    </span>
                                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${r.statusType === 'inProcess' ?
                                                        "bg-green-700" : r.statusType === 'hasDone' ?
                                                            "bg-gray-700" : "bg-red-700"}`}></span>
                                                </span>
                                                <span className={`font-medium ${r.statusType === 'inProcess' ?
                                                    "text-green-600" : r.statusType === 'hasDone' ?
                                                        "text-gray-500" : "text-red-500"}`}>
                                                    {r.statusName}
                                                </span>
                                            </span>
                                        </h2>
                                        <div className='mt-4'>
                                            <table className='table-fixed w-full border-solid border-black border '>
                                                {
                                                    r.listTime.map((r: IScheduleTime, i: number) => (
                                                        <tr key={i}>
                                                            <td className='bg-black font-medium text-white py-2 align-middle text-center text-lg border border-solid border-white'>{r.dayOfName}</td>
                                                            <td className='py-2 text-center text-lg border border-solid border-black'>
                                                                <ul className='h-full '>
                                                                    {
                                                                        r.time.map((r: string, it: number) => (
                                                                            <li>
                                                                                {r}
                                                                            </li>
                                                                        ))
                                                                    }

                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </table>
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <Divider />

                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}
export default Schedule