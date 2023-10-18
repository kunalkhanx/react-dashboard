import React from 'react'

const CounterCardIcon = ({icon, className}) => {
  return (
    <div className={`${className} w-24 2xl:w-28 h-24 2xl:h-28 flex items-center justify-center rounded-full flex-shrink-0`}>
        {icon}
    </div>
  )
}

export default CounterCardIcon