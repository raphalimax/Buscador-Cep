const express = require("express");
const cors = require("cors");
var buscaCep = require("busca-cep"); //API do Via Cep
const e = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => console.log(`Ouvindo na porta: ${PORT}`)); //verifica que ta funcionando e mostra a porta no console

app.get("/", (req, res) => {
  const { tracking } = req.query; //pegando as informaçoes digitadas no front

  buscaCep(tracking, { sync: false, timeout: 1000 }) //API do Cep integrada com o front
    .then((endereco) => {
      res.send(endereco);
      console.log(endereco);
    })
    .catch((erro) => {
      console.log(
        `Erro: statuscode ${erro.statuscode} Nao encontrado ${erro.mensage}`
      );
    });
});
