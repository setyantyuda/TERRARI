import { Router } from 'react-router-dom'
import { Container } from '../components/container'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import { CartProvider } from '../utils/cart'
import { useEffect, useState } from 'react'

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
      if (window.location.pathname === "/sign-in") {
        setAuth(true)
      } else {
        setAuth(false)
      }
  })
  return (
    <CartProvider>
      <div className={`${ auth ? "" : "md:pb-72 pb-96" } relative h-full`}>
        <Navbar/>
        <Container>
          <Component {...pageProps} />
          <Footer/>
        </Container>
      </div>
    </CartProvider>
  )
}

export default MyApp
