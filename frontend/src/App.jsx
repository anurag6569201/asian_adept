import Cursor from './Cursor'
import Footer from './pages/home/components/footer'
import Navbar from './pages/home/components/Navbar'
import WelcomeApp from './pages/home/components/Welcome'
import SphereAnimation from './SphereAnimation'

function App() {
  return (
    <div>
      <Cursor />
      <Navbar/>
      <SphereAnimation />
      <WelcomeApp />
      <Footer/>
    </div>
  )
}

export default App
