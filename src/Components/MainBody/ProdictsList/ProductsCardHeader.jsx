import React from 'react'
import Search from '../../Inputs/Search'
import SelectInput from '../../Inputs/SelectInput'

const options = [
    {label: 'Last 30 days', value: 30},
    {label: 'Last 7 days', value: 7},
    {label: 'Today', value: 1}
]

const ProductsCardHeader = ({term, setTerm}) => {
  return (
    <div className='w-full flex max-lg:flex-col justify-between items-center py-4 px-6 mb-4 gap-4'>
        <p className='text-2xl font-bold w-full'>Product Sell</p>
        <div className='flex max-lg:flex-col gap-3 w-full items-start lg:justify-end'>
            <Search className={`bg-zinc-50`} value={term} setValue={setTerm} />
            <SelectInput options={options} />
        </div>
    </div>
  )
}

export default ProductsCardHeader