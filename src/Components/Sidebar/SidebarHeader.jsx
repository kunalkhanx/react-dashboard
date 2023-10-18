import React, { useContext } from 'react'
import HexagonSVG from '../Images/Icons/HexagonSVG'
import { SidebarContext } from '../../Contexts/SidebarContext'

const SidebarHeader = () => {

  const {setActive} = useContext(SidebarContext)

  const sidebarToggleHandler = () => {
    setActive(prev => !prev)
  }

  return (
    <div className='py-8 px-6 text-white flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <HexagonSVG className={`stroke-white h-6 w-6`} />
          <span className='font-bold text-xl'>Dashboard</span>
        </div>
        <button onClick={sidebarToggleHandler} className='py-2 pl-4 text-xl opacity-70 xl:hidden'><i class="fa-solid fa-x"></i></button>
    </div>
  )
}

export default SidebarHeader