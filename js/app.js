//Proscessamento/Armazenamento
const lista = []
//Entradas
const formulario = document.getElementById("formulario");
const texto = formulario.texto;

//Saidas
const tags = document.getElementById("tags");

//Gatilho/Evento
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let t =texto.value;
    t = t.split(" ");
    for (let i= 0; i < t.length; i++){

        let palavra = t[i];
        palavra = palavra.toUpperCase();

        if(palavra.startsWith("#")){
            lista.push(palavra)

        }else if(palavra.includes("#")){
            let pos = palavra.indexOf("#");
            palavra.slice(pos, palavra.length);
            lista.push(palavra);
        }
    }
    tags.innerHTML = lista;
    formulario.reset();
})