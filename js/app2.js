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
        //Cria botao para remover
        let remover = `<button onclick="remover(${i})">Remover</button>`
        //Cria uma tag li
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} | ${remover} </li>`;
        itens = itens + li;
    }
    //Alterar o HTML da lista para ser igual aos itens
    lista.innerHTML=itens
}

function remover(i){
    let item=amigos[i]; //[Nome, Nasc, Whatsapp]
    let check =confirm(`Deseja realmente excluir ${item[0]}?`)
    if(check ==true){
        amigos.splice(i,1);//splice(posição inicial, qtd itens a remover)
    }
    exibirLista();
}