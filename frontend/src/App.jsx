import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './Cursor';
import Footer from './pages/home/components/footer';
import Navbar from './pages/home/components/Navbar';
import WelcomeApp from './pages/home/components/Welcome';



import Service from './pages/service/components/Service';
import Team from './pages/team/components/Team';
function App() {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomeApp />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/portfolio" element={<h1>Portfolio Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/about" element={<h1>about Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
