import React from 'react'
import CounterCard from './CounterCard'
import CounterCardIcon from './CounterCardIcon'
import EarningSVG from '../../Images/Icons/EarningSVG'
import OrderSVG from '../../Images/Icons/OrderSVG'

const CountersRow = () => {

 const data = [
    {   
        id: 1,
        icon: <CounterCardIcon className={`bg-green-100`} icon={<EarningSVG className={`w-10 h-10 stroke-green-300`} />} />,
        label: 'Earning',
        value: '198k',
        update: 37.8,
        change: 'month',
        direction: 1
    },
    {
        id: 2,
        icon: <CounterCardIcon className={`bg-purple-100`} icon={<OrderSVG className={`w-10 h-10 stroke-purple-300`} />} />,
        label: 'Orders',
        value: '2.4k',
        update: 2,
        direction: 0,
        change: 'month'
    },
    {
        id: 3,
        icon: <CounterCardIcon className={`bg-sky-100`} icon={<i className="fa-solid fa-wallet text-4xl text-sky-600"></i>} />,
        label: 'Balance',
        value: '2.4k',
        update: 2,
        direction: 0,
        change: 'month'
    },
    {
        id: 4,
        icon: <CounterCardIcon className={`bg-pink-100`} icon={<i className="fa-solid fa-cart-shopping text-4xl text-pink-600"></i>} />,
        label: 'Total Sales',
        value: '89k',
        update: 11,
        direction: 1,
        change: 'month'
    }
 ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 mb-10'>
        {data.map(item => <CounterCard key={item.id} data={item} />)}
    </div>
  )
}

export default CountersRow