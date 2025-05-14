import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import './index.css'
function App() {

  return (
    <div className='min-h-screen bg-black bg-[radial-gradient(1500px_circle_at_50%_10%,_#0f172a,_#000000_50%)]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/project' element={<Project />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>
      </Routes>
    </div>
  )
}

export default App
