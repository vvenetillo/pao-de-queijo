import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#ffffff' :  '#121212')};
    transition: background-color 0.3s ease;
  }
`;

const Login = () => {
  const [theme, setTheme] = useState('dark');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação dos campos
    if (username === "admin" || password === "123456") {
      alert('Login bem-sucedido!');
      navigate('/admin');
    } else {
      setErrorMessage('Usuário ou senha inválidos!');
    }
    
    // Aqui você pode fazer a navegação ou outras ações após o login
  };

  return (
    <div>
      <GlobalStyle theme={theme} />
      <StyledWrapper theme={theme}>
        <form className="form" onSubmit={handleSubmit}>
          <p id="heading">Login</p>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
            </svg>
            <input
              autoComplete="off"
              placeholder="Username"
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              placeholder="Password"
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="btn">
            <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </form>
        <button onClick={toggleTheme} className="toggle-theme">Toggle Theme</button>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 200vh;
  background-color: ${(props) => (props.theme === 'dark' ? '#121212' : '#ffffff')};
  transition: background-color 0.3s ease;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    gap: 1em;
    padding: 2em;
    background-color: ${(props) => (props.theme === 'dark' ? '#171717' : '#f1f1f1')};
    border-radius: 25px;
    transition: .4s ease-in-out;
  }

  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }

  #heading {
    text-align: center;
    margin-bottom: 1em;
    color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
    font-size: 1.5em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    background-color: ${(props) => (props.theme === 'dark' ? '#171717' : '#e0e0e0')};
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: ${(props) => (props.theme === 'dark' ? '#d3d3d3' : '#000')};
  }

  .form .btn {
    display: flex;
    justify-content: center;
    margin-top: 1.5em;
  }

  .button1 {
    padding: 0.7em 1.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: ${(props) => (props.theme === 'dark' ? '#252525' : '#ccc')};
    color: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};
    font-size: 1em;
    cursor: pointer;
  }

  .button1:hover {
    background-color: ${(props) => (props.theme === 'dark' ? 'black' : '#999')};
    color: ${(props) => (props.theme === 'dark' ? 'white' : 'black')};
  }

  .toggle-theme {
    margin-top: 20px;
    padding: 0.5em 1.2em;
    background-color: ${(props) => (props.theme === 'dark' ? '#fff' : '#171717')};
    color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: 0.3s ease;
  }

  .toggle-theme:hover {
    background-color: ${(props) => (props.theme === 'dark' ? '#ddd' : '#444')};
  }

  .error-message {
    color: red;
    font-size: 1em;
    margin-top: 1em;
    text-align: center;
  }
`;

export default Login;
