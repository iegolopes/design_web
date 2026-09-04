let dia = prompt("Escolha um dia da semana \n Sendo 1:Domingo - 7:Sábado")
dia = Number(dia);
switch(dia){
    case 1: alert("Você escolheu domingo"); break;
    case 2: alert("Você escolheu segunda"); break;
    case 3: alert("Você escolheu terça"); break;
    case 4: alert("Você escolheu quarta"); break;
    case 5: alert("Você escolheu quinta"); break;
    case 6: alert("Você escolheu sexta"); break;
    case 7: alert("Você escolheu sabádo"); break;
    default: alert("Dia inválido"); break;
}