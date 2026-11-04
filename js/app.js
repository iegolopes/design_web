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

    const remover=document.createElement("button");
    remover.textContent = "Remover"

    remover.addEventListener("click", function(v){
        v.preventDefault();
        item.remove();
    });
    item.append(" ",remover);

    //adiciona o item na lista existente
    lista.append(item);

    //reseta o formulario
    cadastro.reset();
});