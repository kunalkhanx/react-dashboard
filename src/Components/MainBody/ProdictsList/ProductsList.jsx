import React from 'react'
import ProductListHeader from './ProductListHeader'
import ProductListItem from './ProductListItem'

const ProductsList = ({products}) => {

  return (
    <div className='w-full min-w-[720px]'>
        <ProductListHeader />
        {products.map(item => <ProductListItem key={item.id} data={item} />)}
    </div>
  )
}

export default ProductsList