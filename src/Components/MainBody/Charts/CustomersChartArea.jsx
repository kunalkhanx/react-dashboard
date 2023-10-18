import React from 'react'
import CustomerChart from './CustomerChart'

const CustomersChartArea = () => {
  return (
    <div className='w-full overflow-hidden'>
        <div className='mb-6 py-4 px-6'>
            <p className='text-2xl font-bold'>Customers</p>
            <p className='text-sm text-zinc-500'>Customers that buy products</p>
        </div>
        <CustomerChart />
    </div>
  )
}

export default CustomersChartArea