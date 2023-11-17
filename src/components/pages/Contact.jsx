import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

import style from "../style/Contact.module.css";

const api = axios.create({ 
  baseURL: "https://cariocapaodequeijo.netlify.app"
});

export default function Contact() {
  // Backend

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    api.post("/contact", formData)
      .then((res) => {
        console.log(res);
        sweet(); // Chama o SweetAlert após o envio bem-sucedido
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
      });
  }

  // mudança de estado

  const [formData, setFormData] = useState({
    fname: "",
    femail: "",
    ftelefone: "",
    fcidade: "",
    fmensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  

  const sweet = () => {
    Swal.fire("Bom Trabalho!", "Seu Formulário foi enviado", "success" ).then(
      (res) => {
        if ( res.isConfirmed !== "") {
          window.location.reload();
        }
      } 
    )
  };
  

  return (
    <div>
      <h3 id="contato" className={style.contato}>
        Contato
      </h3>

      <div className={style.Formu}>
        <form
          onSubmit={handleSubmit}
          action="https://cariocapaodequeijo.netlify.app/#contato"
          method="POST"
          id="form"
          className={style.form}
        >
          <label htmlFor="fname">Nome:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Nome completo"
            value={formData.fname}
            onChange={handleChange}
            required
          />
          <br />
          <label  htmlFor="femail">Email:</label>
          <input
            type="email"
            id="femail"
            name="femail"
            placeholder="email@example.com"
            value={formData.femail}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="ftelefone">Telefone:</label>
          <input
            type="tel"
            id="ftelefone"
            name="ftelefone"
            placeholder="21 21212-2121"
            value={formData.ftelefone}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="fcidade">Cidade/Estado:</label>
          <input
            type="text"
            id="fcidade"
            name="fcidade"
            placeholder="Cidade onde reside"
            value={formData.fcidade}
            onChange={handleChange}
            required
          />
          <br />

          <label>Mensagem:</label>

          <textarea
            className={style.input_message}
            name="fmensagem"
            id="fmensagem"
            value={formData.fmensagem}
            onChange={handleChange}
            required
          />

          <button 
          type="submit" 
          className={style.button}
          onClick={() => sweet (handleSubmit)} >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
