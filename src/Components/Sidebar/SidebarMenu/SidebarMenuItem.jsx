import React from 'react'

const SidebarMenuItem = ({icon, label, active}) => {
  return (
    <a href='/' className={`${active ? 'bg-white bg-opacity-20' : 'text-opacity-60 hover:text-opacity-100'} py-2 px-4 rounded-md text-white flex items-center justify-between`}>
        <span className='flex items-center gap-4'>
            {icon} {label}
        </span>
        {!active ? <i className="fa-solid fa-angle-right"></i> : null}
    </a>
  )
}

export default SidebarMenuItem