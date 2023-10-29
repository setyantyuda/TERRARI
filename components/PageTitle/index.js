import React from 'react'

export const PageTitle = (props) => {
  return (
    <div className='mt-12 px-8 md:px-0'>
        <div className='text-3xl'>{props.title}</div>
    </div>
  )
}
