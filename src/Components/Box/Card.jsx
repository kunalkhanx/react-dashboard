import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`py-4 px-6 bg-white rounded-md ${className}`}>{children}</div>
  )
}

export default Card