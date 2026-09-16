let i=1;
const imagem=document.getElementById("foto");

function proximo(e){
    e.preventDefault();
    if(i<6){
        i=i+1;
    }
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const prox=document.getElementById("prox");
prox.addEventListener("click", proximo);

function anterior(e){
    e.preventDefault();
    if(i > 1){
        i=i-1;
    }
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);

function selecionar(e){
    e.preventDefault();
    i=Number(cbbox.value);
    imagem.setAttribute("src",`./img/foto${i}.jpg`);
}

const cbbox = document.getElementById("combobox");
cbbox.addEventListener("change", selecionar);

const opacidade=document.getElementById("opacidade")
opacidade.addEventListener("input", function(e){
     e.preventDefault();
     let valor=opacidade.value;
     foto.setAttribute("style", `opactity:${valor}`);
});