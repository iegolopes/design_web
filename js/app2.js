const amigos=[]
const cadastro =document.getElementById("cadastro");
const nome=cadastro.nome;
const nasc=cadastro.nasc;
const whatsapp=cadastro.whatsapp;
const lista = document.getElementById("lista")

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    amigos.unshift(item);
    //Limpa p formulario
    cadastro.reset()
    //Atulaiza lista
    exibirLista();
});

function exibirLista(){
    let itens="";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //[Nome, Nasc, Whatsapp]
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]}`;
        itens = itens + li;
    }
    //Alterar o HTML da lista para ser igual aos itens
    lista.innerHTML=itens
}