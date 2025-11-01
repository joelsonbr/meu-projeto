const express = require("express");
const cors = require("cors");
const server = express();

let cadastros = [];

server.use(express.json());
server.use(cors());

server.get("/cadastro", (req, res) => {
  return res.json(cadastros);
});

server.post("/cadastro", (req, res) => {
  const novoCadastro = req.body;
  cadastros.push(novoCadastro);
  return res
    .status(201)
    .json({ mensagem: "Cadastro realizado com sucesso!", data: novoCadastro });
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
