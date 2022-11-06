import React, { useState } from "react";
import "./App.css";
import TrackCep from "./TrackCep";

function App() {
  const [events, setEvents] = useState([]);

  const convertArray = (obj) => {
    //funçao que converte o json em array
    const arr = [obj];
    return arr;
  };

  const envio = (e) => {
    //Funçao para nao deixar a paginar atualizar ao apertao o botao
    e.preventDefault();

    const formData = new FormData(e.target); //pega o que foi enviado no formulario
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`) //faz a conversa com o back-end
      .then((response) => response.json())
      .then((data) => {
        const array = convertArray(data); //passa os dados para array
        setEvents(array);
      })

      .catch((error) => console.error());
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>
      <form onSubmit={envio}>
        <div className="form-group">
          <input
            type="text"
            name="tracking"
            className="form-control"
            placeholder="Digite seu Cep..."
          />
          <button type="submit" name="BuscadorCep" className="btn">
            Enviar
          </button>
        </div>
      </form>
      <TrackCep events={events} />
    </div>
  );
}

export default App;
