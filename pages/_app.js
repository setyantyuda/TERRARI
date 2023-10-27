import { Container } from '../components/container'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import '../styles/globals.css'

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <div className='relative'>
      <Navbar/>
      <Container>
        <Component {...pageProps} />
        <Footer/>
      </Container>
    </div>
  )
}

export default MyApp
