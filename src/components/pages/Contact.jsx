import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

import style from "../style/Contact.module.css";

const api = axios.create({
  baseURL: "https://api-paodequeijo.vercel.app",
});

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    femail: "",
    ftelefone: "",
    fcep: "",
    fbairro: "",
    fcidade: "",
    fmensagem: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    api
      .post("/contact", {
        // Outros campos do formulário
        fname: formData.fname,
        femail: formData.femail,
        ftelefone: formData.ftelefone,
        fcep: cep,
        fcidade: endereco.cidade,
        fbairro: endereco.bairro,
        fmensagem: formData.fmensagem,
      })
      .then((res) => {
        console.log(res);
        sweet();
        setFormData({
          fname: "",
          femail: "",
          ftelefone: "",
          fcep: "",
          fmensagem: "",
          fcidade: "",
          fbairro: ""
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
      });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sweet = () => {
    Swal.fire("Bom Trabalho!", "Seu Formulário foi enviado", "success").then(
      (res) => {
        if (res.isConfirmed !== "") {
          window.location.reload();
          
        }
      }
    );
  };


  // parte de api do cep e o tratamento da mesma
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    cep: "",
    cidade: "",
    bairro: "",
    // Adicione mais campos conforme necessário
  });
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const consultarCEP = async () => {
    try {
      // Validação do cep
      if (/^\d{5}-?\d{3}$/.test(cep)) {
        const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();

          console.log(data);
          // Atualize o estado com os dados do CEP
          setEndereco({
            cep: data.cep,
            cidade: data.localidade,
            bairro: data.bairro,
            
          });
          // funcão para o input do resultado
          setMostrarResultado(true);
        } else {
          console.error("Erro ao consultar o CEP");
        }
      } else {
        console.error("CEP inválido");
      }
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
    }
  };

  return (
    <div>
      <h3 id="contato"  className={style.contato}>
        Contato
      </h3>

      <div className={style.Formu}>
        <form
          onSubmit={handleSubmit}
          action={api}
          method="POST"
          id="form"
          className={style.form}
          data-netlify="true"
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

          <label htmlFor="fcep">Cep:</label>
          <input
            type="text"
            id="fcep"
            name="fcep"
            placeholder="Cidade onde reside"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
            required
          />
          <button onClick={consultarCEP}>Consultar cep</button>
          {mostrarResultado && (
        <div>
          <h3>Dados do Endereço</h3>
          <p>
            <label htmlFor="fbairro">Bairro: </label>
            <input type="text" readOnly id="fbairro" name="fbairro" value={endereco.bairro} />
          </p>
          <p>
            <label htmlFor="fcidade">Cidade: </label>
            <input type="text" readOnly id="fcidade"  name= "fcidade" value={endereco.cidade} />
          </p>
        </div>
      )}

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

          <button type="submit"
          onClick={sweet}
           className={style.button}
           >
            Enviar
          </button>
        </form>
      </div>
    </div>
  ) ;
}
