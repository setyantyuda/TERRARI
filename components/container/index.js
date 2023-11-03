import React, { useEffect, useState } from 'react'

export const Container = ({children}) => {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
      if (window.location.pathname === "/sign-in") {
        setAuth(true)
      } else {
        setAuth(false)
      }
  })
  return (
    <div className={`${auth ? "" : "md:max-w-[1100px] max-w-[420px] pt-[72px]"} w-full mx-auto`}>
        {children}
    </div>
  )
}