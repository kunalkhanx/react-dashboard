import React from 'react'
import Card from '../../Box/Card'
import OverViewChartArea from './OverViewChartArea'
import CustomersChartArea from './CustomersChartArea'

const MainCharts = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-8 mb-10'>
        <Card className='lg:col-span-4'>
            <OverViewChartArea />
        </Card>
        <div className={`lg:col-span-2 bg-white rounded-md`}>
            <CustomersChartArea />
        </div>
        
    </div>
  )
}

export default MainCharts