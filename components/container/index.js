import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='md:max-w-[1100px] max-w-[420px] w-full mx-auto pt-[72px]'>
        {children}
    </div>
  )
}