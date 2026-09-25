const amigos=[]
const cadastro =document.getElementById("cadastro");
const nome=cadastro.nome;
const nasc=cadastro.nasc;
const whatsapp=cadastro.whatsapp;
const lista = document.getElementById("lista")
let editando=null;

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    if (editando == null){
        let check = amigos.find(item => item[0] == nome.value)
        if (check == undefined){
            //Adiciona se não existir
            amigos.unshift(item);
             //Limpa o formulario
            cadastro.reset();
        }else{
            alert(`${nome.value} já cadastrado`)
        }
    }else{
        //Se editando diferente de nulo, atualizar
        let amigo = amigos[editando] //[Nome, nasc, whatsapp]
        amigo[0]=nome.value;
        amigo[1]=nasc.value;
        amigo[2]=whatsapp.value;
    }
    //Atualiza lista
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