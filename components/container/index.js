import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='max-w-[1100px] w-full mx-auto pt-[72px]'>
        {children}
    </div>
  )
}