import React from 'react'

const ProductListItem = ({data}) => {
  return (
    <div className='grid grid-cols-8 lg:grid-cols-10 py-2'>
        <div className='flex items-center gap-4 col-span-5 lg:col-span-7 px-6'>
            <img src={data.image} className='h-14 w-20 object-contain rounded-md' alt="" />
            <div>
                <p className='text-lg font-bold mb-0'>{data.title}</p>
                <p className='text-sm text-zinc-500'>{data.info}</p>
            </div>
        </div>

        <p className='flex items-center px-4 py-2'>{data.stock} in stock</p>
        <p className='flex items-center px-4 py-2 font-bold whitespace-nowrap'>$ {data.price}</p>
        <p className='flex items-center px-4 py-2'>{data.sales}</p>
    </div>
  )
}

export default ProductListItem