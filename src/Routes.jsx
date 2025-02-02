import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import App from "./App";
import Admin from "./components/pages/Admin";
import Login from "./components/pages/Login";

function Rota() {
  return (
    <Router>
      <div>
        {/* Navegação */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/admin">Admin</Link> | 
          <Link to="/login">Login</Link> | 
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Rota;
