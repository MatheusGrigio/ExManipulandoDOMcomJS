// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Selecionando botao q muda tudo
const BtnMudaTudo = document.getElementById("btn-muda-tudo")

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
  document.getElementsByClassName("mensagem1")[0].textContent = "Aqui tambem mudou!"
});



// Evento de clique pra alterar todos os titulos
BtnMudaTudo.addEventListener("click", mudaTodosTitulos);

//Função muda titulo
function mudaTodosTitulos () {
  const titulos = document.querySelectorAll('.mensagem2')
      titulos.forEach((paragrafo, index) => {
        paragrafo.textContent = `Frase ${ index + 1} modificada utilizando JS`;
      });


}
