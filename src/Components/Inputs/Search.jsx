import React from 'react'

const Search = ({className, value = '', setValue = () => null}) => {

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='relative'>
        <span className='absolute text-lg text-zinc-500 left-2 top-1'><i className="fa-solid fa-magnifying-glass"></i></span>
        <input value={value} onChange={onChangeHandler} type="text" className={`w-48 py-1 pr-4 px-8 rounded focus:outline-none border-2 border-transparent focus:border-primary ${className}`} placeholder='Search' />
    </div>
  )
}

export default Search