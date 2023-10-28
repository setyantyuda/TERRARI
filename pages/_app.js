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
    <div className='relative h-full pb-72'>
      <CartProvider>
        <Navbar/>
        <Container>
          <Component {...pageProps} />
          <Footer/>
        </Container>
      </CartProvider>
    </div>
  )
}

export default MyApp
