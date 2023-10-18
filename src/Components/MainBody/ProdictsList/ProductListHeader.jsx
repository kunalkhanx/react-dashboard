import React from 'react'

const ProductListHeader = () => {
  return (
    <div className='grid grid-cols-8 lg:grid-cols-10 [&>div]:py-2 [&>div]:px-4 border-b text-sm font-bol text-zinc-400 px-2'>
            <div className='col-span-5 lg:col-span-7'>
                <p>Product Name</p>
            </div>
            <div>
                <p>Stock</p>
            </div>
            <div>
                <p>Price</p>
            </div>
            <div>
                <p>Total Sales</p>
            </div>
        </div>
  )
}

export default ProductListHeader