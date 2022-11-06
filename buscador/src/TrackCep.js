import React from "react";
import "./styles/main.css";

function TrackCep({ events }) {
  if (!events || events.length === 0) return null; //se nao tiver nada digitado nao aparece as informaçoes

  return (
    <>
      <div className="container-dados">
        <h2>Encontrado: </h2>
        <ul className="list-group">
          {events.map(
            (
              item //mapeia os itens
            ) => (
              <li className="list-group-item" key={item.cep}>
                <span>CEP: {item.cep}</span>
                <span>Endereço: {item.logradouro}</span>
                <span>Bairro: {item.bairro}</span>
                <span>Cidade: {item.localidade}</span>
                <span>Estado: {item.uf}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
export default TrackCep;
