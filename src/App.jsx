import './components/style/Style.css'
import Footer from './components/pages/Footer'
import Navbar from './components/pages/Navbar'
import Card from './components/pages/Card'
import Contact from './components/pages/Contact'
import RedeSocial from './components/pages/RedeSocial'
import Location from './components/pages/Location'


import { Outlet } from 'react-router-dom'



function App() {

  return (
   <div>
    <Navbar />
    <Card />
    <Outlet />
    <RedeSocial />
    <Location />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
