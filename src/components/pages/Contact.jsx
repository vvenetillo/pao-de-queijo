import Swal from 'sweetalert2';
import { useState } from 'react';

import style from '../style/Contact.module.css'

export default function Contact() {
    // Backend
    const [formData, setFormData] = useState({
      fname:"",
      femail:"",
      ftelefone:"",
      fcidade: "",
      fmensagem: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(() => {
        })
        .catch((error) => {
          console.log('error', error);
        });

    };

    const sweet = () => {
      Swal.fire('Bom Trabalho!', 'Seu Formulário foi enviado', 'success').then((res) => {
        if (res.isConfirmed) {

          window.location.reload();
        }
      });
    };



    return (
      <div>
        <h3 id="contato" className={style.contato}>
          Contato
        </h3>

        <div className={style.Formu}>
          <form
            onSubmit={handleSubmit}
            action="http://localhost:3000/usuarios"
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
            <label htmlFor="femail">Email:</label>
            <input
              type="email"
              id="femail"
              name="femail"
              placeholder="email@example.com"
              value={formData.femail}
              onChange={handleChange} 
              required           />
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
            
              <textarea className={style.input_message}
               name="fmensagem" 
               id="fmensagem" 
               value={formData.fmensagem}
               onChange={handleChange}
               required />
          

            <button type="submit"
              className={style.button}
              onClick={sweet}
            >
              Enviar
            </button>

          </form>
        </div>
      </div>
    );
    }
