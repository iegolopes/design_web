//Processamento
//Entrada
const cadastro = document.getElementById("cadastro")
const tarefa = cadastro.tarefa;
//Saida
const lista = document.getElementById("lista")
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    //cria novo item de lista
    const item=document.createElement("li");
    
    //altera texto do li
    item.textContent = tarefa.value;

    //adiciona o item na lista existente
    lista.append(item);

    //reseta o formulario
    cadastro.reset();
});