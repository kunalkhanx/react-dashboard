import React from 'react'

const SidebarFooder = () => {
  return (
    <div className='flex-1 h-full flex flex-col justify-end pb-8 px-4'>
        <button className='bg-white/20 py-2 px-4 flex justify-between items-center text-white rounded-md'>
            <div className='flex items-center gap-3'>
                <img src="https://www.w3schools.com/w3images/avatar6.png" className='w-10 h-10 rounded-full' alt="" />
                <div className='text-left'>
                    <p className='text-lg'>Evano</p>
                    <p className='text-sm text-opacity-20'>Project Manager</p>
                </div>
            </div>
            <i className="fa-solid fa-angle-down"></i>
        </button>
    </div>
  )
}

export default SidebarFooder