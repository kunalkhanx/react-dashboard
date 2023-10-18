import React from 'react'
import Header from './Header/Header'
import CountersRow from './Counters/CountersRow'
import MainCharts from './Charts/MainCharts'
import ProductsCard from './ProdictsList/ProductsCard'

const MainBody = () => {

    const data = {
        user: {
            name: 'Kunal'
        }
    }

  return (
    <div className='h-screen w-full xl:w-[calc(100vw-18rem)] fixed top-0 xl:right-0 bg-gray-100 px-8 pt-6 overflow-y-auto'>
        <Header name={data.user.name} />
        <CountersRow />
        <MainCharts />
        <ProductsCard />
    </div>
  )
}

export default MainBody