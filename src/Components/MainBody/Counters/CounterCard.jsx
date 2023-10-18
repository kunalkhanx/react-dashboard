import React from 'react'
import Card from '../../Box/Card'

const CounterCard = ({data}) => {
  return (
    <Card className={`flex items-center gap-3`}>
        {data.icon}
        <div>
            <p className='text-sm text-zinc-400'>{data.label}</p>
            <p className='font-bold text-2xl 2xl:text-3xl'>${data.value}</p>
            <p className='flex flex-wrap items-center gap-1 text-sm font-medium'>
                <span className={`flex gap-1 items-center ${data.direction === 1 ? 'text-green-500' : 'text-red-500'}`}>
                    {data.direction === 1 ? <i className="fa-solid fa-arrow-up-long text-green-500"></i> : <i className="fa-solid fa-arrow-down-long text-red-500"></i>}
                    {data.update}%
                </span>
                this {data.change}
            </p>
        </div>
    </Card>
  )
}

export default CounterCard