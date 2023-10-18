import React from 'react'
import OverViewChart from './OverViewChart'
import SelectInput from '../../Inputs/SelectInput'

const OverViewChartArea = () => {

    const durations = [
        {label: 'Quarterly', value: 3},
        {label: 'Monthly', value: 1},
        {label: 'Yearly', value: 12}
    ]

  return (
    <div className=''>
        <div className='w-full flex justify-between mb-6'>
            <div>
                <p className='text-2xl font-bold'>Overview</p>
                <p className='text-sm text-zinc-500'>Monthly Earning</p>
            </div>
            <SelectInput options={durations} />
        </div>
        <div className='w-full overflow-x-auto'>
            <OverViewChart />
        </div>
    </div>
  )
}

export default OverViewChartArea