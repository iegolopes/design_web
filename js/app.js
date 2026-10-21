//Processamento?Armazenamento
let hoje = new Date();
//Entrardas
const cadastro = document.getElementById("cadastro");
const nome =cadastro.nome;
//Saidas
const saudacao = document.getElementById("saudacao");

//Passo a passo
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_formada = `${hoje.getDay()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje  é ${data_formada}`;
    cadastro.reset();
});