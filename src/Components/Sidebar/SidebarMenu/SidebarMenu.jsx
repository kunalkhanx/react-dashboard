import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

const SidebarMenu = () => {
  return (
    <div className='px-6 flex flex-col gap-3'>
        <SidebarMenuItem icon={<i className="fa-solid fa-chart-line"></i>} label={'Dashboard'} active />
        <SidebarMenuItem icon={<i className="fa-solid fa-box"></i>} label={'Product'} />
        <SidebarMenuItem icon={<i className="fa-solid fa-users"></i>} label={'Customers'} />
        <SidebarMenuItem icon={<i className="fa-solid fa-cash-register"></i>} label={'Income'} />
        <SidebarMenuItem icon={<i className="fa-solid fa-percent"></i>} label={'Promote'} />
        <SidebarMenuItem icon={<i className="fa-solid fa-circle-question"></i>} label={'Help'} />
    </div>
  )
}

export default SidebarMenu