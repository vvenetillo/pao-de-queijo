import './components/style/Style.css';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';
import Card from './components/pages/Card';
import Contact from './components/pages/Contact';
import RedeSocial from './components/pages/RedeSocial';
import Location from './components/pages/Location';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />   {/* Menu fixo */}
      <Card />      {/* Seção principal da Landing Page */}
      <RedeSocial /> {/* Redes Sociais */}
      <Location />   {/* Localização */}
      <Contact />    {/* Contato */}
      <Footer />     {/* Rodapé */}

      {/* Outlet para carregar a área de Admin quando necessário */}
      <Outlet />
    </div>
  );
}

export default App;
