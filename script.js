const inputNome = document.getElementById("name-user");
const inputSenha = document.getElementById("senha-user");
const btnSubmit = document.getElementById("btn-submit");

const express = require("express");
const server = express();

server.use(express.json());

btnSubmit.addEventListener("click", function () {
  const nome = inputNome.value;
  const senha = inputSenha.value;
});
