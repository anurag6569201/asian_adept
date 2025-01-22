import Cursor from './Cursor'
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
    </div>
  )
}

export default App
