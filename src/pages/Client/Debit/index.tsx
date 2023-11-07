import React from 'react'
import LayoutMain from '../../../layouts/Client/Main'
import { listDebits } from '../../../data/debit'
import TableDebit from './TableDebit'

const Debit = (): JSX.Element => {
    return (
        <LayoutMain>
            <div className='container'>
                <div className='mt-32'>
                    <div>
                        <h2 className='text-3xl text-black font-normal text-center py-3'>THÔNG TIN THANH TOÁN</h2>
                    </div>
                    <div>
                        <TableDebit
                            listItem={listDebits}
                        /> 
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}
export default Debit 