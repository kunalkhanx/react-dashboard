import React from 'react'

const SelectInput = ({options = []}) => {
  return (
    <select className='h-fit py-1 px-4 rounded-md bg-zinc-50 text-zinc-500 w-48'>
        {options.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
    </select>
  )
}

export default SelectInput