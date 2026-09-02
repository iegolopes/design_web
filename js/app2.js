let dia = prompt("Escolha um dia da semana \n Sendo 1:Domingo - 7:Sábado")
dia = Number(dia)

if (dia <= 0|| dia >=8){
    alert("Dia invalido");
}else if (dia==1){
    alert("Você escolheu domingo");
}else if (dia==2){
    alert("Você escolheu segunda");
}else if (dia==3){
    alert("Você escolheu terça");
}else if (dia==4){
    alert("Você escolheu quarta");
}else if (dia==5){
    alert("Você escolheu quinta");
}else if (dia==6){
    alert("Você escolheu sexta");
}else{
    alert("Vecê escolheu sabádo")
}