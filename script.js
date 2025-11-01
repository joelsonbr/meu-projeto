const emailInput = document.getElementById("email_usuario");
const passwordInput = document.getElementById("senha");
const btn = document.querySelector(".btn-login"); // Usando querySelector para a classe

btn.addEventListener("click", function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Preencha os campos de email e senha");
    return;
  }

  // Objeto com os dados a serem enviados
  const dadosDoFormulario = {
    email: email,
    password: password,
  };

  // Envia os dados (PUSH) para o servidor Express usando fetch()
  fetch("http://localhost:3000/cadastro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dadosDoFormulario), // Converte o objeto em JSON
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Resposta do servidor: ${data.message}`);
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor.");
    });
});
