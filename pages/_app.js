import { Router } from 'react-router-dom'
import { Container } from '../components/container'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'
import { CartProvider } from '../utils/cart'

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <CartProvider>
      <div className='relative h-full pb-72'>
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
