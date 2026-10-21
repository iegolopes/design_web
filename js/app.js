//Processamento?Armazenamento
let hoje = new Date();
//Entrardas
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
//Saidas
const saudacao = document.getElementById("saudacao");
const aniversario = document.getElementById("aniversario")

//Passo a passo
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let data_nasc = new Date(nasc.value);
    let data_aniv = new Date(2026, nasc.valeu.getMonth(), data_nasc.getDay());
    let data_formada = `${hoje.getDay()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`;
    saudacao.innerHTML = `Olá, ${nome.value}! Hoje  é ${data_formada}`;
    if (data_aniv > hoje){
        let dif = data_aniv.getMonth() - hoje.getMonth();

       aniversario.innerHTML = `Diferença de hoje para niver ${data_aniv - hoje}`;
    }else{
       aniversario.innerHTML = `Diferença de hoje para niver ${hoje - data_aniv}`;
    }
    cadastro.reset();
});