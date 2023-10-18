import React, { useContext } from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarMenu from './SidebarMenu/SidebarMenu'
import SidebarFooder from './SidebarFooter/SidebarFooder'
import { SidebarContext } from '../../Contexts/SidebarContext'

const Sidebar = () => {

  const {active} = useContext(SidebarContext)

  return (
    <div className={`w-72 bg-primary h-screen fixed z-[500] flex flex-col top-0 -left-72 xl:left-0 transition-all max-xl:[&.active]:left-0 ${active ? 'active' : ''}`}>
        <SidebarHeader />
        <SidebarMenu />
        <SidebarFooder />
    </div>
  )
}

export default Sidebar