import React, { useContext, useState } from 'react'
import Search from '../../Inputs/Search'
import { SidebarContext } from '../../../Contexts/SidebarContext'

const Header = ({name}) => {
  const [term, setTerm] = useState('')
  const {setActive} = useContext(SidebarContext)

  const sidebarToggleHandler = () => {
    setActive(prev => !prev)
  }

  return (
    <div className='sm:flex items-center justify-between mb-10'>
      <div className='flex items-center max-sm:mb-6'>
        <button onClick={sidebarToggleHandler} className='text-xl py-2 pr-4 xl:hidden'><i class="fa-solid fa-bars"></i></button>
        <p className='text-xl font-bold'>Hello {name} 👋,</p>
      </div>
      <Search value={term} setValue={setTerm} />
    </div>
  )
}

export default Header