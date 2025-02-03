import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme === "dark" ? "#ffffff" : "#121212"};
    transition: background-color 0.3s ease;
  }
`;

const Admin = () => {
  const navigate = useNavigate(); 
  const [theme, setTheme] = useState("dark");
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    if (!isAuthenticated) {
      navigate("/login"); 
    }
  }, [navigate]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Função para sair (logout)
  const handleLogout = () => {
    localStorage.removeItem("auth"); 
    navigate("/login"); 
  };

  // Função para buscar todos os contatos
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Função para filtrar contatos com base no texto de pesquisa
  const filteredContacts = contacts.filter((contact) => {
    return (
      (contact.fname &&
        contact.fname.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (contact.femail &&
        contact.femail.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (contact.fcidade &&
        contact.fcidade.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (contact.fbairro &&
        contact.fbairro.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <StyledWrapper theme={theme}>
      <h1 className="title">Lista de Contatos</h1>

      <GlobalStyle theme={theme} />

      {/* Botão de Troca de Tema */}
      <button onClick={toggleTheme} className="toggle-theme">
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </button>

      {/* Botão de Logout */}
      <button onClick={handleLogout} className="logout-button">
        Sair
      </button>

      {/* Área de Pesquisa */}
      <div className="search">
        <h3 className="search-title">Pesquisar: </h3>
        <input
          type="text"
          className="search-input"
          placeholder="cidade, bairro, nome, e-mail"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      <Table striped bordered hover className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Cep</th>
            <th>Contato</th>
            <th>Mensagem</th>
            <th>Data de Envio</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.fname}</td>
                <td>{contact.femail}</td>
                <td>{contact.fcidade}</td>
                <td>{contact.fbairro}</td>
                <td>{contact.fcep}</td>
                <td>{contact.ftelefone}</td>
                <td>{contact.fmensagem}</td>
                <td>{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Carregando...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === "dark" ? "#121212" : "#ffffff"};
  transition: background-color 0.3s ease;
  flex-direction: column;

  .title {
    font-size: 2em;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }

  .search-title {
    margin: 10px;
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  }

  .search {
    display: flex;
    flex-direction: row;
    margin: 15px;
    padding: 20px;
  }

  .search-input {
    width: 250px;
    height: 50px;
    border-radius: 5px;
  }

  .admin-table {
    width: 80%;
    max-width: 800px;
    margin-top: 2em;
  }

  .toggle-theme {
    margin-top: 20px;
    padding: 0.5em 1.2em;
    background-color: ${(props) =>
      props.theme === "dark" ? "#fff" : "#171717"};
    color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s ease;
  }

  .toggle-theme:hover {
    background-color: ${(props) => (props.theme === "dark" ? "#ddd" : "#444")};
  }

  .logout-button {
    margin-top: 20px;
    padding: 0.5em 1.2em;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s ease;
  }

  .logout-button:hover {
    background-color: darkred;
  }
`;

export default Admin;